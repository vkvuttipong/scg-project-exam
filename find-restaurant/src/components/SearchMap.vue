<template>
  <div>
    <b-card-group>
      <b-card title="" header-tag="header" footer-tag="footer">
        <template #header>
          <h6 class="mb-0">ค้นหาร้านอาหาร</h6>
        </template>

        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <div>
                <b-form-input
                  v-model="text"
                  placeholder="Enter your place"
                ></b-form-input>
              </div>
            </b-col>
            <b-col>
              <b-button v-on:click="OnSearch()">ค้นหา </b-button>
            </b-col>
          </b-row>
        </b-container>

        <b-container>
          <div>
            <template>
              <div>
                <b-table
                  small
                  striped
                  hover
                  :items="items"
                  :fields="fields"
                  responsive="sm"
                ></b-table>
                <b-tfoot>
                  <b-tr>
                    <b-td colspan="7" variant="secondary" class="text-right">
                      Total Rows: <b>{{ items.length }}</b>
                    </b-td>
                  </b-tr>
                </b-tfoot>
              </div>
            </template>
          </div>
        </b-container>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      text: "Bang Sue",
      fields: ["name", "address"],
      items: null,
    };
  },
  computed: {},
  methods: {
    async GetRestaurant(param) {
      const headers = { "Content-Type": "application/json" };
      await axios
        .get(`http://localhost:3500/api/find-restaurants/${param}`, { headers })
        .then((response) => (this.items = response.data.data));
    },
    OnSearch() {
      const param = this.text;
      this.GetRestaurant(param);
    },
  },
  mounted() {
    this.GetRestaurant(this.text);
  },
};
</script>

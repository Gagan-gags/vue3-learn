<template>
  <div class="container-fluid">
    <h3 class="mb-2">Product List</h3>
    <div class="bg-white p-4 mt-4">
      <div class="table-head row">
        <div class="col-md-3 mb-3">
          <div class="search-bar bg-light">
            <div class="input-group">
              <div class="input-group-prepend theme-bg rounded-start">
                <button id="button-addon2" type="submit" class="btn btn-link">
                  <span class="icon-Search"></span>
                </button>
              </div>
              <input type="search" placeholder="Search by name..." aria-describedby="button-addon2"
                class="form-control border-0 theme-bg" />
            </div>
          </div>
        </div>

        <div class="col-md-9 mb-3">
          <div class="d-flex align-items-center justify-content-md-end">
            <!-- <p @click="to('product.create')">check</p> -->
            <router-link :to="{ name: 'product.create' }" class="btn btn-dark text-light">
              <span class="icon-add"></span> Add Product
            </router-link>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead class="thead-light">
            <tr>
              <th style="width: 50px;">Id</th>
              <th>
                <div class="d-flex align-items-center justify-content-between">
                  Title
                </div>
              </th>
              <th style="width: 400px">Description</th>
              <th>Price</th>
              <th>Discount %</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>brand</th>
              <th>category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody ref="loadingContainer" style="position: relative">
            <tr v-for="(product, index) in this.formDataSaved" :key="index" @dblclick="showEditPage(product.id)">
              <td>
                {{ product.id }}
              </td>
              <td>{{ product.title }}</td>
              <td>{{ product.description }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.discountPercentage }} %</td>
              <td>{{ product.rating }}</td>
              <td>{{ product.stock }}</td>
              <td>{{ product.brand }}</td>
              <td>{{ product.category }}</td>
              <td>
                <div class="d-flex align-items-center justify-content-between">
                  <router-link :to="{ name: 'product.update', params: { id: product.id } }" class="btn theme-bg">
                    <span class="icon-edit"></span>
                  </router-link>
                  <button class="btn theme-bg ms-2" type="button" @click="deleteItem(index)">
                    <span class="icon-delete"></span>
                  </button>
                </div>
              </td>
            </tr>
            <!-- <template v-else>
              <td colspan="100" class="text-center">No records found</td>
            </template> -->
          </tbody>
        </table>
      </div>
      <!-- <div class="d-flex flex-row justify-content-center">
        <list-pagination class="m-3" :links="links" @paginate="productData" />
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonHoc from "../../components/hoc/ButtonHoc.vue";
import axios from "axios";

export default defineComponent({
  name: "ProductListView",
  components: { ButtonHoc },

  data: () => ({
    products: null,
    sectionId: Number,
    isASCActive: true,
    isDESCActive: false,
    formDataSaved: [], // Add this line to define formDataSaved
  }),
  methods: {
    showEditPage(product: number | string) {
      this.$router.push({
        name: "product.update",
        params: { id: product },
      });
    },
    deleteItem(index) {
      console.log(index);
      this.formDataSaved.splice(index, 1);
      // Optionally, you can also save the updated data to localStorage
      localStorage.setItem('formData', JSON.stringify(this.formDataSaved));
    },
    // storeProductId(id) {
    //   // Store the product ID in localStorage
    //   localStorage.setItem('productId', id);
    // }
  },

  created() {
    // Load data from local storage when the component is created
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.formDataSaved = JSON.parse(savedData);
    }
  },
});
</script>
<style lang="scss" scoped></style>

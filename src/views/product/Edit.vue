<template>
  <div class="container-fluid">
    <div class="d-flex align-items-center mb-4">
      <span class="icon-left-arrow fs-4 text-dark pe-auto" @click="$router.back()"></span>
      <h3 class="mb-0 ms-3">Edit Product</h3>
    </div>

    <form class="employee-form" @submit.prevent="updateForm(formData.id)">
      <div class="bg-white p-4 mb-4">
        <h4 class="mb-4">Product Details</h4>
        <div class="row g-3">
          <div class="col-md-3">
            <label class="form-label">Product Id <span class="text-danger">*</span></label>
            <input type="number" class="form-control" id="title" :maxlength="100" ref="title" v-model="formData.id" />
            <div v-if="errors.id" class="error">{{ errors.id }}</div>
          </div>
          <div class="col-md-3">
            <label class="form-label">Title <span class="text-danger">*</span></label>
            <input type="text" class="form-control" id="title" :maxlength="100" ref="title" v-model="formData.title" />
            <div v-if="errors.title" class="error">{{ errors.title }}</div>
          </div>
          <div class="col-md-3">
            <label class="form-label">Description</label>
            <input type="text" class="form-control" id="description" :maxlength="100" ref="description"
              v-model="formData.description" />
            <div v-if="errors.description" class="error">
              {{ errors.description }}
            </div>
          </div>

          <div class="col-md-3">
            <label class="form-label">Price</label>
            <input type="text" class="form-control" id="price" :maxlength="50" ref="price" v-model="formData.price" />
            <div v-if="errors.price" class="error">{{ errors.price }}</div>
          </div>
          <div class="col-md-3">
            <label class="form-label">Discount Percentage</label>
            <input type="text" class="form-control" id="discountPercentage" :maxlength="50" ref="discountPercentage"
              v-model="formData.discountPercentage" />
            <div v-if="errors.discountPercentage" class="error">
              {{ errors.discountPercentage }}
            </div>
          </div>
          <div class="col-md-3">
            <label class="form-label">Rating</label>
            <input type="number" class="form-control" id="rating" :maxlength="50" ref="rating"
              v-model="formData.rating" />
            <div v-if="errors.rating" class="error">
              {{ errors.rating }}
            </div>
          </div>
          <div class="col-md-3">
            <label class="form-label">Stock</label>
            <input type="text" class="form-control" id="stock" :maxlength="50" ref="stock" v-model="formData.stock" />
            <div v-if="errors.stock" class="error">
              {{ errors.stock }}
            </div>
          </div>
          <div class="col-md-3">
            <label class="form-label">Brand</label>
            <input type="text" class="form-control" id="brand" :maxlength="50" ref="brand" v-model="formData.brand" />
            <div v-if="errors.brand" class="error">
              {{ errors.brand }}
            </div>
          </div>
          <div class="col-md-3">
            <label class="form-label">Category</label>
            <input type="text" class="form-control" id="category" :maxlength="50" ref="category"
              v-model="formData.category" />
            <div v-if="errors.category" class="error">
              {{ errors.category }}
            </div>
          </div>
          <div class="col-md-12">
            <button-hoc :dark="true" :type="'submit'" class="w-10">Save</button-hoc>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonHoc from "../../components/hoc/ButtonHoc.vue";
import axios from "axios";

export default defineComponent({
  name: "ProductEditView",

  components: { ButtonHoc, axios },
  data: () => ({
    formData: {
      title: "",
      description: "",
      price: "",

      discountPercentage: "",
      rating: "",
      stock: "",
      brand: "",
      category: "",
    },
    errors: {},
    mergedData: [],
    productId: "",
    val: [],
    selectedData: null,
  }),

  methods: {
    updateForm(productId) {
      if (this.validateForm()) {
        try {
          const objIndex = this.mergedData.findIndex((obj => obj.id === productId));
          // Update the item in the array
          if (objIndex !== -1) {
            // this.mergedData[objIndex].title = this.formData.title;
            this.mergedData[objIndex] = { ...this.mergedData[objIndex], ...this.formData };

          }

          localStorage.setItem("formData", JSON.stringify(this.mergedData));
          this.$router.push({ name: "product.index" });
          // await axios
          //   .post("https://dummyjson.com/products/add")
          //   .then((response) => {
          //     console.log(response.data.products);
          //     this.$router.push({ name: "product.index" });
          //   })
          //   .catch(function (err) {
          //     if (err.response) {
          //       if(err.response?.status == 422){
          //         console.log(err.response);
          //       }
          //     } else if (err.request) {
          //       console.log(err.request);
          //     } else {
          //       console.log("Error", err.message);
          //     }
          //   });
        } catch (err) {
          console.log("Something went wrong.");
        } finally {
          console.log("Successfully");
        }
      }
    },
    validateForm() {
      this.errors = {};
      if (!this.formData.id) {
        this.errors.id = "Product Id is required.";
      }
      if (!this.formData.title) {
        this.errors.title = "Title is required.";
      }
      if (!this.formData.description) {
        this.errors.description = "Description is required.";
      }
      if (!this.formData.price) {
        this.errors.price = "Price is required.";
      }
      if (!this.formData.discountPercentage) {
        this.errors.discountPercentage = "Discount Percentage is required.";
      }
      if (!this.formData.rating) {
        this.errors.rating = "Rating is required.";
      }
      if (!this.formData.stock) {
        this.errors.stock = "Stock is required.";
      }
      if (!this.formData.brand) {
        this.errors.brand = "Brand is required.";
      }
      if (!this.formData.category) {
        this.errors.category = "Category is required.";
      }

      return Object.keys(this.errors).length === 0;
    },
    prepareData(data) {
      this.formData.id = data.id;
      this.formData.title = data.title;
      this.formData.description = data.description;
      this.formData.price = data.price;
      this.formData.discountPercentage = data.discountPercentage;
      this.formData.rating = data.rating;
      this.formData.stock = data.stock;
      this.formData.brand = data.brand;
      this.formData.category = data.category;
    },
  },

  mounted() {
    const productId = this.$route.params.id;
    Object.values(this.mergedData).forEach(val => {
      if (val.id == productId) {
        this.selectedData = val;
        console.log('Hello', this.selectedData);
      }
    });
    this.prepareData(this.selectedData);
  },
  created() {
    // Load data from local storage if it exists
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      this.mergedData = JSON.parse(savedData);

    }
  }
});
</script>
<style lang="scss" scoped></style>

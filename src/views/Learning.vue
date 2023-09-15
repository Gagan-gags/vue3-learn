

<template>
    <main>
        <div class="row">
            <div class="col-md-4">
                <h5>Vue js Get input field value</h5>
                <h3>User detail</h3>
                <form action="onsumit" @submit.prevent="OnSubmit">
                    <div class="text-bg-info p-3 rounded">
                        <div class="mb-4">
                            <label for="name" class="mb-2">Enter the email </label>
                            <input type="email" class="form-control" id="name" placeholder="Enter the email"
                                v-model="email" />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="mb-2">Enter the Password</label>
                            <input type="password" class="form-control" id="email" placeholder="Enter the Password"
                                v-model="password" />
                        </div>
                        <div>
                            <button :type="'submit'" class="btn btn-dark"> Save</button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="col-md-4">
                <h5>Vue js Get Checkbox and radio button value</h5>
                <h3>Technology</h3>
                <div class="bg-success-subtle bg-dark p-3 rounded mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="java" id="java" v-model="technology">
                        <label class="form-check-label" for="java">
                            Java
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="vuejs" id="vuejs" v-model="technology">
                        <label class="form-check-label" for="vuejs">
                            Vue js
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="nodejs" id="nodejs" v-model="technology">
                        <label class="form-check-label" for="nodejs">
                            Node js
                        </label>
                    </div>

                    <div>
                        <p>Selected Technology : <span>{{ technology }}</span></p>
                    </div>
                </div>

                <div class="bg-danger-subtle p-3">
                    <h3>Who i am</h3>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="student" id="student" v-model="who">
                        <label class="form-check-label" for="student">
                            Student
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" value="developer" id="developer" v-model="who">
                        <label class="form-check-label" for="developer">
                            Developer
                        </label>
                    </div>

                    <div>
                        <p>Who i am : <span>{{ who }}</span></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <h5>if else conditions | conditional rendering</h5>
                <h3>if else conditions</h3>

                <div class="bg-success-subtle bg-dark p-3 rounded mb-3">
                    <!--    
                <h3 v-if="show">if else conditions</h3>
                <h3 v-else class="mb-3">if else conditions</h3> -->
                    <button class="btn btn-dark" @click='isHidden = !isHidden'>toggle</button>
                    <p v-show='isHidden' class="bg-danger text-white p-3 rounded mt-2">Show / Hide</p>

                </div>
            </div>
        </div>

        <div class="row">
            <!-- for loop -->
            <div class="col-md-4">
                <h3>For Loop and List</h3>
                <div class="bg-success-subtle bg-dark p-3 rounded mb-3">
                    <ul class="list-group list-group-horizontal mb-3">
                        <li class="list-group-item" v-for="item in skill" :key="item">{{ item }}</li>
                    </ul>
                    <h3>array of object in data property</h3>
                    <div class="card">
                        <div class="table-responsive">
                            <table class="table">
                                <thead class="table-light">
                                    <tr>
                                        <th scope="col">Name </th>
                                        <th scope="col">Adress</th>
                                        <th scope="col">education</th>
                                        <th scope="col">designation</th>
                                        <th scope="col">email</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in user" :key="item.name">
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.address }}</td>
                                        <td>{{ item.education }}</td>
                                        <td>{{ item.designation }}</td>
                                        <td>{{ item.email }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </main>
</template>
  
<script lang="ts">
export default {
    name: "LearningView",

    data() {
        return {
            email: null,
            password: null,

            technology: [],
            who: null,

            show: false,
            isHidden: true,

            skill: ['java', 'php', 'nodejs', 'vue3js', 'react', 'angular'],
            user: [
                {
                    name: "Gagankumar",
                    address: "Himachal pradesh",
                    mobile: 7807536625,
                    education: "Pg",
                    designation: "Frontend Developer",
                    email: "87gagankumar@gmail.com"
                },
                {
                    name: "Ravinder kumar",
                    address: "Himachal pradesh",
                    mobile: 980150160,
                    education: "Pg",
                    designation: "nodejs Developer",
                    email: "ravinderkumar@gmail.com"

                },
                {
                    name: "vikas",
                    address: "Himachal pradesh",
                    mobile: 981760304,
                    education: "Pg",
                    designation: "reactjs Developer",
                    email: "vikas007@gmail.com"
                }

            ]
        }
    },

    methods: {
        OnSubmit() {
            console.log("value : ", this.email, this.password);
        }
    }

}
</script>
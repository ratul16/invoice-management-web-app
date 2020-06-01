<template>
    <div class="invoice container">
        <div class="inForms">
            
            <div class="card seller border-0 shadow rounded" v-if="card.step1">
                <div class="card-header border-0">
                    <i class="fas fa-user"></i> &nbsp; Customer Informations
                </div>
                <div class="card-body">
                    <form class="text-left form-row">
                        <div class="form-group col-md-12">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" v-model="buyer.name" />
                        </div>

                        <div class="form-group col-md-12">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                v-model="buyer.email"
                            />
                        </div>

                        <div class="form-group col-md-12">
                            <label for="phone">Contact Number</label>
                            <input
                                type="text"
                                class="form-control"
                                id="phone"
                                v-model="buyer.phone"
                            />
                        </div>

                        <div class="col-md-12 text-center">
                            <button type="button" class="btn vuebtn" @click="step(), getInvoice()">
                                Continue &nbsp;
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <!-- customer card end -->
            <transition name="fade" mode="out-in">
                <div class="card customer border-0 shadow rounded" v-if="card.step2">
                    <div class="card-header border-0">
                        <i class="fas fa-cart"></i> &nbsp; Product Cart 
                    </div>
                    <div class="card-body">
                        <div class="row justify-content-center">
                            <div class="col-md-4">
                                <div class="card text-justify border-0">
                                    <div class="card-body pb-0">
                                        <span><strong>Buyer : </strong> {{buyer.name}}</span> <br>
                                        <span><strong>Email : </strong> {{buyer.email}}</span> <br>
                                        <span><strong>Phone : </strong> +88{{buyer.phone}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card text-justify border-0">
                                    <div class="card-body">
                                        <span><strong>Company : </strong> {{seller.company}}</span><br>
                                        <span><strong>Invoice ID : </strong> {{invoiceID}} </span> <br>
                                        <span><strong>Created : </strong> {{created}}</span> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr>
                        
                        <form class="text-left">
                            <div class="form-row">
                                <div class="form-group col-md-12 text-left">
                                    <button class="btn vuebtn">
                                        <i class="fas fa-plus"></i> &nbsp; Item
                                    </button>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="inputState">Products</label>
                                    <select
                                        id="inputState"
                                        class="form-control"
                                    >
                                        <option selected disabled value="sadasd"
                                            >Choose...</option
                                        >
                                        <option
                                            v-for="product in products"
                                            :key="product.id"
                                            class="text-capitalize"
                                            :value="product.id"
                                        >
                                            {{ product.icon }} {{ product.name }} -
                                            {{ product.price }} BDT
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="quantity">Quantity</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="quantity"
                                    />
                                </div>
                            </div>

                        </form>

                        <hr />

                        <div class="productTable table-responsive-sm">
                            <table class="table table-hover table-borderless" id="">
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-left">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Subtotal</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="product in purchase" :key="product.id">
                                        <th scope="row" class="text-left">
                                            {{ product.icon }} {{ product.name }}
                                        </th>
                                        <td>21</td>
                                        <td>{{ product.price }}</td>
                                        <td>{{21 * product.price }}</td>
                                        <td>
                                            <button class="btn btn-danger btn-sm">
                                                <i class="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr scope="row" class="text-left">
                                        <th colspan="2">Total : 1231 BDT</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <br>
                        <div class="text-center">
                            <button type="button" class="btn vuebtn" @click="step1()">
                                Generate Invoice &nbsp;
                                <!-- <i class="fas fa-arrow-right"></i> -->
                            </button>
                        </div>
                    </div>
                </div>
            </transition>

            <!-- Product cart end -->
            <transition name="fade" mode="out-in">
                <div class="card invoiceList border-0 shadow rounded" v-if="card.step3">
                    <div class="card-header border-0">
                        <i class="fas fa-receipt"></i> &nbsp; Invoice 
                    </div>
                    <div class="card-body">
                        <div class="row justify-content-center">
                            <div class="col-md-4">
                                <div class="card text-justify border-0 ">
                                    
                                    <div class="card-body pb-0">
                                        <div class="py-2">
                                            <h4>{{seller.company}}</h4>
                                        </div>
                                        <span><strong>Invoice ID : </strong> {{invoiceID}} </span> <br>
                                        <span><strong>Employee : </strong> {{seller.name}}</span><br>
                                        <span><strong>Email : </strong> {{seller.email}}</span><br>
                                        <span><strong>Contact No. : </strong> +88{{seller.phone}}</span><br>
                                        <span><strong>Location : </strong> {{seller.location}}</span><br>
                                        <span><strong>Created : </strong> {{created}}</span> 
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="card text-justify border-0">
                                    <div class="card-body">
                                        <span><strong>Buyer : </strong> {{buyer.name}}</span> <br>
                                        <span><strong>Email : </strong> {{buyer.email}}</span> <br>
                                        <span><strong>Phone : </strong> +88{{buyer.phone}}</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <hr>

                        <div class="productTable table-responsive-sm">
                            <table class="table table-hover table-borderless" id="">
                                <thead>
                                    <tr>
                                        <th scope="col" class="text-left">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="product in purchase" :key="product.id">
                                        <th scope="row" class="text-left">
                                            {{ product.icon }} {{ product.name }}
                                        </th>
                                        <td>21 {{ product.unit }}</td>
                                        <td>{{ product.price }}</td>
                                        <td>{{21 * product.price }}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr scope="row" class="text-left">
                                        <th colspan="2"><span class="border-top px-2 pt-2">Total : {{total}} BDT</span></th>
                                    </tr>
                                </tfoot>
                            </table>

                        </div>
                        <br>
                        <div class="text-center">
                            <button type="button" class="btn vuebtn" @click="paymentInfo()" :data-toggle="x" data-target="#payment">
                                Payment &nbsp;
                                <!-- <i class="fas fa-arrow-right"></i> -->
                            </button>
                        </div>
                    </div>
                    <!-- Vertically centered modal -->
                    <!-- Modal -->
                    <div class="modal fade" id="payment" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="paymentLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-body p-4">
                                    <h4>Scan To Pay</h4> <br>
                                    <h2>{{total}} BDT</h2> <br>
                                    <div class="qrcode">
                                        <img src="../assets/InVoicing.png" alt="">
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn vuebtn" data-dismiss="modal">
                                        <i class="fas fa-times"></i> &nbsp; Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>



        



    </div>
</template>

<script>
import data from "@/assets/product.json";
export default {
    data: () => ({
        card:{
            step1:true,
            step2:false,
            step3:false
        },
        products: data,
        seller: {
            name: "William James",
            phone: "01254786573",
            company: "EverestLTD.",
            email: "cashier@everest.com",
            account: "874598617",
            location:"Dhanmondi, Dhaka"
        },
        buyer:{
            name:'',
            phone:'',
            email:''
        },
        invoiceID: "",
        created:new Date().toDateString(),
        purchase:[
            {
                "id":123,
                "name": "Mango",
                "icon": "🥭",
                "price": 100,
                "unit": "Kg",
                "type": "fruit"
            },
            {
                "id": 223,
                "name": "Strawberry",
                "icon": "🍓",
                "price": 220,
                "unit": "Kg",
                "type": "fruits"
            },
            {
                "id": 33,
                "name": "Banana",
                "icon": "🍌",
                "price": 60,
                "unit": "dozen",
                "type": "fruits"
            },
        ],
        total:2350,
        payment:'',
        x:''
    }),
    methods:{
        step(){
            this.card.step1 = false;
            this.card.step2 = true;
            console.log(this.buyer)
        },
        step1(){
            this.card.step2 = false;
            this.card.step3 = true;
            // console.log(this.buyer)
        },
        getInvoice(){
            this.invoiceID = "INV" + Math.floor(Math.random(1111) * Math.floor(9999));
        },
        paymentInfo(){
            this.payment = 'payment@everest.com'+ this.seller.phone + this.seller.company + this.seller.account + this.total
            console.log(this.payment)
            this.x='modal'
        }
    },
    mounted(){
        this.getInvoice();
    }
};
</script>

<style></style>

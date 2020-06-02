<template>
  <div class="home">

    <div class="container mt-3">
      <a href="https://github.com/ratul16/InVoicing" target="_blank" class="btn btn-dark repo shadow-lg">
        <i class="fab fa-github"></i>
      </a>
        <div class="info">
            <p class="text-justify">
              InVoicing lets you create dynamic invoices for your store. The App will do all the calculation based on the given quantity, price of the product and discount given of all the products in the cart. This also gives your customers a clean view of their purchased items. It also has a scan to pay feature, where you can add your own payment options and let your customers pay through their smart phones easily and if cash method is selected then the app will just show the total amount pay. 
            </p>
        </div>
        <br>
        <div class="row imgslide">

          <div class="col-md-4">
            <img src="../assets/img/1.png" class="mockup" loading="eager">
          </div>
          <div class="col-md-4">
            <img src="../assets/img/2.png" class="mockup" loading="eager">
          </div>
          <div class="col-md-4">
            <img src="../assets/img/3.png" class="mockup" loading="eager">
          </div>

        </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>


<style scoped>
  .repo {
  position: fixed;
  bottom: 2%;
  right: 5%;
  width: 60px;
  height: 60px;
  padding: 9px;
  border-radius: 50%;
  text-align: center;
  z-index: 99999;
}
  .repo:hover{
    transform: scale(1.1);
    transition: .5s;
  }
  .repo i {
    font-size: 2.5em;
  }

</style>
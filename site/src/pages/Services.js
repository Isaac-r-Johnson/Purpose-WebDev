import React from 'react';

const Services = () => {
    return (
        <div class="text-center options">

    <div class="coll">
      <div class="card mb-4 rounded-3 option">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Informative</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$300</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Customized Informative Website</li>
            <li>Free Url and Hosting</li>
            <li>Option to upgrade url and/or hosting</li>
          </ul>
            <a href='/contact'><button type="submit" name="inform" class="w-100 btn btn-lg btn-outline-primary btn">Request Site</button></a>
        </div>
      </div>
    </div>

    <div class="coll">
      <div class="card mb-4 rounded-3 option">
        <div class="card-header py-3 special-head">
          <h4 class="my-0 fw-normal">Interactive</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$700</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Customized Interactive Website</li>
            <li>Ability to add interactions with users</li>
            <li>Cheap Site Maintenance</li>
          </ul>
            <a href='/contact'><button type="submit" name="interact" class="w-100 btn btn-lg btn-outline-primary btn special">Request Site</button></a>
        </div>
      </div>
    </div>

    <div class="coll">
      <div class="card mb-4 rounded-3 option">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Full Stack</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$1500</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Customized Full Stack Website</li>
            <li>Use of Database</li>
            <li>Ability to access sites like MailChimp</li>
          </ul>
          <a href='/contact'><button type="submit" name="full-stack" class="w-100 btn btn-lg btn-outline-primary btn">Request Site</button></a>
        </div>
      </div>
    </div>

  </div>
    );
}

export default Services;
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">某猫創作倉庫</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="/works"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Works
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/works">All</router-link></li>
              <li>
                <router-link class="dropdown-item" to="/works?tag=recommended"
                  >おすすめ</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/works?tag=service"
                  >web service</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/works?tag=software"
                  >software</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/works?tag=hardware"
                  >hardware</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/works?tag=movie"
                  >movie</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/about"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/info"
              >Info</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/blog"
              >Blog</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import "../../public/css/fonts.css";

export default {
  name: "HeaderComponent",
};
</script>

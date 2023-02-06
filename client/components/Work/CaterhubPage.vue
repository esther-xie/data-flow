<!-- Default page that also displays projects -->

<template>
  <main>
    <div class="left-half">
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="info">info</b-button>
          </b-card-header>
          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
              Caterhub is a mobile platform that visions a new experience of co-eating. The project derives from a project at 
                <span class="highlight-green">Harvard's CS 79, Designing Usable Interface of Professor Krzysztof Gajos.</span>
                The original project was a team project with 
                <span class="highlight-purple">Natnael Neshome and Ivan Zhang.</span>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="info">process</b-button>
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <!-- second collapse -->
              <div role="tablist">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2-1 variant="warning">I. the challenge</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-2-1" accordion="my-accordion-2-1" role="tabpanel">
                    <b-card-body>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2-2 variant="warning">II. the story mapping</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-2-2" accordion="my-accordion-2-2" role="tabpanel">
                    <b-card-body>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2-3 variant="warning">III. the user testing</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-2-3" accordion="my-accordion-2-3" role="tabpanel">
                    <b-card-body>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            <!-- second collapse end -->
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="info">prototype</b-button>
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <!-- second collapse -->
              <div role="tablist">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3-1 variant="warning">Accordion 3 1</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-3-1" accordion="my-accordion-3-1" role="tabpanel">
                    <b-card-body>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3-2 variant="warning">Accordion 3 2</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-3-2" accordion="my-accordion-3-2" role="tabpanel">
                    <b-card-body>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3-3 variant="warning">Accordion 3 3</b-button>
                  </b-card-header>
                  <b-collapse id="accordion-3-3" accordion="my-accordion-3-3" role="tabpanel">
                    <b-card-body>
                      <b-card-text>{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            <!-- second collapse end -->
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>  
    </div>
  
    <div class="right-half">
      <img class="projectimg" src="..\public\cater1.png" alt="caterhub landing page">
    </div>

  </main>
</template>

<script>
import { CollapsePlugin } from 'bootstrap-vue';

export default {
  name: 'CaterhubPage',
  components: {CollapsePlugin},
  data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
      }
    }
}
</script>

<style scoped>
.left-half{
  position: absolute;
  left: 0px;
  width: 50%;
  height: 100%;
  padding-left: 10%;
  padding-top: 15%;
  padding-bottom: 10%;
  overflow-y: auto;
}
.right-half{
  position: absolute;
  right: 0px;
  width: 50%;
}
.projectimg {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.btn {
  --bs-btn-color: none;
  --bs-btn-bg: none;
  --bs-btn-border-color: none;
  --bs-btn-hover-bg: none;
  --bs-btn-hover-border-color: none;
  --bs-btn-active-bg: none;
  --bs-btn-active-border-color: none;
  font-size: 28px;
}
.btn[aria-expanded="true"]{
  text-decoration: underline;
}
.card {
  --bs-card-color: none;
  --bs-card-border-width: 0;
  --bs-card-cap-bg: none;
}
.btn-warning {
  font-size: 16px;
  font-weight: bold;
}
.btn-warning[aria-expanded="true"]{
  text-decoration: none;
}
.highlight-green {
  background-color: #C0D790;
  padding: 0 6px;
}
.highlight-purple {
  background-color: #A390D7;
  padding: 0 6px;
}
</style>

<script type="text/x-template" id="db-team-sheet">

  <div class="db-flex-item-2 db-flex-row db-bottom-border">
    <div class="db-padding-horizontal db-flex-item db-align-vertical-center db-flex-static db-right-text">
      <template v-if="isBP === false">
        <span v-if="n === 0">Affirmative:</span>
        <span v-if="n === 1">Negative:</span>
      </template>
      <template v-if="isBP === true">
        <span v-if="n === 0">Opening Government:</span>
        <span v-if="n === 1">Opening Opposition:</span>
        <span v-if="n === 2">Closing Government:</span>
        <span v-if="n === 3">Closing Opposition:</span>
      </template>
    </div>
    <div class="db-fill-in db-flex-item">
    </div>
  </div>

  <div class="db-flex-item-2 db-flex-row db-bottom-border  db-dont-fill-in"><!-- Keys -->
    <div class="db-align-vertical-center  db-left-text db-padding-horizontal" v-bind:class="{ 'db-flex-item-fws': isBP === false, 'db-flex-item-fwm': isBP === true }">
    </div>
    <div v-show="showPronouns" class="db-align-vertical-center db-align-horizontal-center db-flex-item-fwl">
      Pronoun
    </div>
    <div class="db-align-vertical-center db-padding-horizontal db-align-horizontal-center db-flex-item">
      Full Name
    </div>
    <div class="db-align-vertical-center db-flex-item-fwl db-align-horizontal-center">
      Score
    </div>
  </div>

  <div class="db-flex-item-2 db-flex-row db-bottom-border" v-for="x in speakersCount"><!-- Speakers -->
    <div class="db-align-vertical-center  db-left-text db-padding-horizontal" v-bind:class="{ 'db-flex-item-fws': isBP === false, 'db-flex-item-fwm': isBP === true }">
      <template v-if="isBP === false">
        [[ x + 1 ]]
      </template>
      <template v-if="isBP === true">
        <span v-if="n === 0">
          <span v-if="x === 0">PM</span><span v-else>DPM</span>
        </span>
        <span v-if="n === 1">
          <span v-if="x === 0">LO</span><span v-else>DLO</span>
        </span>
        <span v-if="n === 2">
          <span v-if="x === 0">GM</span><span v-else>GW</span>
        </span>
        <span v-if="n === 3">
          <span v-if="x === 0">OM</span><span v-else>OW</span>
        </span>
      </template>
    </div>
    <div v-show="showPronouns" class="db-fill-in db-flex-item-fwl">
    </div>
    <div class="db-padding-horizontal db-fill-in db-flex-item">
    </div>
    <div class="db-padding-horizontal db-fill-in db-flex-item-fwl">
    </div>
  </div>

  <div class="db-flex-item-2 db-flex-row db-bottom-border" v-show="hasReplies"><!-- Replies -->
    <div class="db-align-vertical-center db-align-horizontal-end db-right-text db-flex-item-fws">
      R.
    </div>
    <div class="db-padding-horizontal db-fill-in db-flex-item-fwl">
    </div>
    <div class="db-padding-horizontal db-fill-in db-flex-item">
    </div>
    <div class="db-fill-in db-flex-item-fwl">
    </div>
  </div>

  <div class="db-flex-item-2 db-flex-row"><!-- Totals -->
    <div class="db-align-vertical-center  db-left-text db-padding-horizontal" v-bind:class="{ 'db-flex-item-fws': isBP === false, 'db-flex-item-fwm': isBP === true }">
    </div>
    <div class="db-flex-item db-flex-row db-align-vertical-center">
      <div class="db-align-vertical-center db-flex-item-1 db-left-text db-vertical-center-text" v-if="isBP">
        <span class="db-fill-in">
          <template v-if="pageIsLandscape or doubleUp">Placed </template>
          1<sup>st</sup>
        </span>
      </div>
      <div class="db-align-vertical-center db-flex-item-1 db-left-text db-vertical-center-text" v-if="isBP">
        <span class="db-fill-in">
          <template v-if="pageIsLandscape or doubleUp">Placed </template>
          2<sup>nd</sup>
        </span>
      </div>
      <div class="db-align-vertical-center db-flex-item-1 db-left-text db-vertical-center-text" v-if="isBP">
        <span class="db-fill-in">
          <template v-if="pageIsLandscape or doubleUp">Placed </template>
          3<sup>rd</sup>
        </span>
      </div>
      <div class="db-align-vertical-center db-flex-item-1 db-left-text db-vertical-center-text" v-if="isBP">
        <span class="db-fill-in">
          <template v-if="pageIsLandscape or doubleUp">Placed </template>
          4<sup>th</sup>
        </span>
      </div>
    </div>
    <div class="db-padding-horizontal db-static db-align-vertical-center db-right-text">
      Total Score:
    </div>
    <div class="db-fill-in db-flex-item-fwl">
    </div>
  </div>

</script>

<!-- Register Table Component Behaviour -->
<script>
  Vue.component('db-team-sheet', {
    template: '#db-team-sheet',
    props: {
      n: Number,
      isBP: Boolean,
      speakersCount: Number,
      showPronouns: Boolean,
      hasReplies: Boolean,
      pageIsLandscape: Boolean,
      doubleUp: Boolean
    },
  })
</script>

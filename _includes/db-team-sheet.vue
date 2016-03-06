<script type="text/x-template" id="db-team-sheet">

  <div class="db-flex-item db-flex-row db-bottom-border">
    <div class="db-padding-horizontal db-flex-item db-align-vertical-center db-flex-static db-right-text">
      <template v-if="isBP === false">
        <span v-if="n === 0">Affirmative Team:</span>
        <span v-if="n === 1">Negative Team:</span>
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

  <div class="db-flex-item db-flex-row db-bottom-border db-dont-fill-in"><!-- Keys -->
    <div class="db-flex-item-fws">
    </div>
    <div v-show="showPronouns" class="db-align-horizontal-center db-align-vertical-center db-padding-horizontal db-flex-item-fwl">
      Pronoun
    </div>
    <div class="db-align-horizontal-center db-align-vertical-center db-padding-horizontal db-flex-item">
      Speaker's Full Name
    </div>
    <div class="db-align-horizontal-center db-align-vertical-center db-flex-item-fwl">
      Score<br> ([[ lowestSpeak ]]-[[ highestSpeak ]])
    </div>
  </div>

  <div class="db-flex-item db-flex-row db-bottom-border" v-for="n in speakersCount"><!-- Speakers -->
    <div class="db-align-vertical-center db-align-horizontal-end db-right-text db-flex-item-fws">
      [[ n + 1 ]].
    </div>
    <div v-show="showPronouns" class="db-padding-horizontal db-fill-in db-flex-item-fwl">
    </div>
    <div class="db-padding-horizontal db-fill-in  db-flex-item">
    </div>
    <div class="db-fill-in db-flex-item-fwl">
    </div>
  </div>

  <div class="db-flex-item db-flex-row db-bottom-border" v-show="hasReplies"><!-- Replies -->
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

  <div class="db-flex-item db-flex-row"><!-- Totals -->
    <div class="db-align-vertical-center db-align-horizontal-end db-right-text db-flex-item-fws">
    </div>
    <div class="db-padding-horizontal db-flex-item-fwl">
    </div>
    <div class="db-padding-horizontal db-flex-item db-align-vertical-center db-right-text ">
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
      lowestSpeak: Number,
      highestSpeak: Number
    },
  })
</script>

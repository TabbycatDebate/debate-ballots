<!-- Team Score Sheet Template -->
<script type="text/x-template" id="db-team-sheet">

  <div class="db-flex-item db-flex-row">
    <div class="db-padding-horizontal db-flex-item db-align-vertical-center db-flex-static db-right-text">
      <span v-if="teamsCountInt === 2 && n === 0">Affirmative Team:</span>
      <span v-if="teamsCountInt === 2 && n === 1">Negative Team:</span>
      <span v-if="teamsCountInt === 4 && n === 0">Opening Government's Team:</span>
      <span v-if="teamsCountInt === 4 && n === 1">Opening Opposition's Team:</span>
      <span v-if="teamsCountInt === 4 && n === 2">Closing Government's Team:</span>
      <span v-if="teamsCountInt === 4 && n === 3">Closing Opposition's Team:</span>
    </div>
    <div class="db-fill-in db-flex-item">
    </div>
  </div>

  <div class="db-flex-item db-flex-row"><!-- Keys -->
    <div class=" db-flex-item-fws">
    </div>
    <div v-show="showPronouns" class="db-align-horizontal-center db-align-vertical-center db-padding-horizontal db-flex-item-fwm">
      Pronoun
    </div>
    <div class="db-align-horizontal-center db-align-vertical-center db-padding-horizontal db-flex-item">
      Speaker's Full Name
    </div>
    <div class="db-align-horizontal-center db-align-vertical-center db-flex-item-fwm">
      Score<br> ({{ lowestSpeak }}-{{ highestSpeak }})
    </div>
  </div>

  <div class="db-flex-item db-flex-row" v-for="n in speakersCount"><!-- Speakers -->
    <div class="db-align-vertical-center db-align-horizontal-end db-right-text db-flex-item-fws">
      {{ n + 1 }}.
    </div>
    <div v-show="showPronouns" class="db-padding-horizontal db-fill-in  db-flex-item-fwm">
    </div>
    <div class="db-padding-horizontal db-fill-in  db-flex-item">
    </div>
    <div class="db-fill-in  db-flex-item-fwm">
    </div>
  </div>

  <div class="db-flex-item db-flex-row" v-show="hasReplies"><!-- Speakers -->
    <div class="db-align-vertical-center db-align-horizontal-end db-right-text db-flex-item-fws">
      R.
    </div>
    <div class="db-padding-horizontal db-fill-in  db-flex-item-fwm">
    </div>
    <div class="db-padding-horizontal db-fill-in  db-flex-item">
    </div>
    <div class="db-fill-in  db-flex-item-fwm">
    </div>
  </div>

  <div class="db-flex-item db-flex-row"><!-- Speakers -->
    <div class="db-flex-item">
    </div>
    <div class="db-right-text db-flex-item-fwl db-align-vertical-center db-static">
      Total Score:
    </div>
    <div class="db-fill-in db-flex-item-fwm">
    </div>
  </div>

</script>

<!-- Register Table Component Behaviour -->
<script>
  Vue.component('db-team-sheet', {
    template: '#db-team-sheet',
    props: {

    },
  })
</script>

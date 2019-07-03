


const intro_welcome = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro_welcome',
    title: 'WELCOME',
    text: 'If you consider yourself an expert in Cubist art or were ever engaged in any kind of cubist art education, please do NOT take part in this experiment! <br> Please do NOT use a mobile device to do this experiment, instead use a PC or Laptop!',
    buttonText: 'Start'
});

const intro_resolution = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro_resolution',
    title: 'RESOLUTION CHECK',
    text: 'Make sure that the following image has the same size as a normal credit card. If not, please resize your browser-viewport (by pressing Ctrl and + or - in most browsers).   <img src="images/resolution/card02.png" alt="card" height="370"> ',
    buttonText: 'Continue',
});

const test_instruction = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'test_instruction',
    title: 'TEST INSTRUCTION',
    text: 'We will check your eyes soon ... <br>Make sure that the distance between you and the screen is about an arm´s length',
    buttonText: 'Start Test',
});

const test_snellen = babeViews.view_generator("textbox_input", {
    trials: trial_info.snellen.length,
    name: 'test_snellen',
    data: trial_info.snellen,
});

const b1_instruction = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'b1_instruction',
    title: 'BLOCK 1 - INSTRUCTION',
    text: 'First Part of Experiment starts here ...',
    buttonText: 'Start Block 1'
});

const b1_exp = babeViews.view_generator("rating_scale", {
    trials: trial_info.b1_exp.length,
    name: 'b1_exp',
    data: trial_info.b1_exp,
});

const b2_instruction = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'b2_instruction',
    title: 'BLOCK 2 - INSTRUCTION',
    text: 'Second Part of Experiment starts here ...',
    buttonText: 'Start Block 2'
});

const b2_exp = babeViews.view_generator("rating_scale", {
    trials: trial_info.b2_exp.length,
    name: 'b2_exp',
    data: trial_info.b2_exp,
});

const outro_data_alt = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'outro_data',
    title: 'YOUR DATA',
    text: 'Type in your shit here ...',
    age_question: 'Age',
    gender_question: 'Gender',
    buttonText: 'Next',
});

const outro_data = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'outro_data',
    title: 'YOUR DATA',
    text: 'Feel free to answer the following questions ...',
},{
  answer_container_generator: function(config, CT) {
      const quest = babeUtils.view.fill_defaults_post_test(config);
      return `<form>
                  <p class='babe-view-text'>
                      <label for="age">${quest.age.title}:</label>
                      <input type="number" name="age" min="0" max="110" id="age" />
                  </p>
                  <p class='babe-view-text'>
                      <label for="gender">${quest.gender.title}:</label>
                      <select id="gender" name="gender">
                          <option></option>
                          <option value="${quest.gender.male}">${quest.gender.male}</option>
                          <option value="${quest.gender.female}">${quest.gender.female}</option>
                          <option value="divers">divers</option>
                          <option value="NA">not want to specify</option>
                      </select>
                  </p>
                  <p class="babe-view-text">
                      <label for="comments">${quest.comments.title}</label>
                      <textarea name="comments" id="comments" rows="6" cols="40"></textarea>
                  </p>
                  <button id="next" class='babe-view-button'>${config.button}</button>
          </form>`
  },
});

const outro_consent = babeViews.view_generator("thanks",{
    trials: 1,
    name: 'outro_consent',
    title: 'CONSENT',
    prolificConfirmText: 'Give your most private data to us, we sell it to facebook :)',
});

const outro_thanks = babeViews.view_generator("thanks",{
    trials: 1,
    name: 'outro_thanks',
});

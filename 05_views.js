
const intro_welcome = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro_welcome',
    title: 'WELCOME',
    text: 'Thank you for your interest in this experiment. <br/><br/>Make sure you use a <strong>PC or Laptop</strong>.',
    buttonText: 'Start'
});

const intro_resolution = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro_resolution',
    title: 'RESOLUTION CHECK',
    text: 'Please resize your browser-viewport so that the following image has the same size as a normal credit card. You can do that by pressing <strong>Ctrl</strong> and <strong>+</strong> or <strong>-</strong> in most browsers.   <img src="images/resolution/card.png" alt="card" height="370"> ',
    buttonText: 'Continue',
});

const test_instruction = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'test_instruction',
    title: 'TEST INSTRUCTION',
    text: 'We will check your eyes soon. Make sure that the distance between you and the screen is about <strong>an arm\'s length</strong> and <strong>remains constant</strong> throughout the experiment!',
    buttonText: 'Start',
});

const test_snellen = babeViews.view_generator("textbox_input", {
    trials: trial_info.snellen.length,
    name: 'test_snellen',
    data: trial_info.snellen,
},{
    answer_container_generator: function(config, CT) {
        return `<p class='babe-view-question'>${config.data[CT].question}</p>
                    <div class='babe-view-answer-container'>
                        <textarea name='textbox-input' rows=1 cols=1 class='babe-response-text' />
                    </div>
                    <button id='next' class='babe-view-button babe-nodisplay'>next</button>`;
    },
    handle_response_function: function(config, CT, babe, answer_container_generator, startingTime) {
        let next;
        let textInput;
        const minChars = config.data[CT].min_chars === undefined ? 10 : config.data[CT].min_chars;

        $(".babe-view").append(answer_container_generator(config, CT));

        next = $("#next");
        textInput = $("textarea");

        // attaches an event listener to the textbox input
        textInput.on("keyup", function() {
            // if the text is longer than (in this case) 10 characters without the spaces
            // the 'next' button appears
            if (textInput.val().trim().length > minChars) {
                next.removeClass("babe-nodisplay");
            } else {
                next.addClass("babe-nodisplay");
            }
        });

        // the trial data gets added to the trial object
        next.on("click", function() {
            const RT = Date.now() - startingTime; // measure RT before anything else
            let trial_data = {
                trial_name: config.name,
                trial_number: CT + 1,
                response: textInput.val().trim(),
                RT: RT
            };

            babe.global_data.snellen_result = textInput.val().trim(),

            trial_data = babeUtils.view.save_config_trial_data(config.data[CT], trial_data);

            babe.trial_data.push(trial_data);
            babe.findNextView();
        });
    },
});

const b0_expert = babeViews.view_generator("forced_choice", {
    trials: trial_info.expert.length,
    title: 'QUESTION',
    name: 'b0_expert',
    data: trial_info.expert,
},{
    handle_response_function: function(config, CT, babe, answer_container_generator, startingTime) {
        $(".babe-view").append(answer_container_generator(config, CT));

        // attaches an event listener to the yes / no radio inputs
        // when an input is selected a response property with a value equal
        // to the answer is added to the trial object
        // as well as a readingTimes property with value
        $("input[name=answer]").on("change", function() {
            const RT = Date.now() - startingTime;
            let trial_data = {
                trial_name: config.name,
                trial_number: CT + 1,
                response: $("input[name=answer]:checked").val(),
                RT: RT
            };

            babe.global_data.is_expert = $("input[name=answer]:checked").val(),

            trial_data = babeUtils.view.save_config_trial_data(config.data[CT], trial_data);

            babe.trial_data.push(trial_data);
            babe.findNextView();
        });
    },
});

const b1_instruction = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'b1_instruction',
    title: 'BLOCK 1 - INSTRUCTION',
    text: 'The first part of the experiment starts here. <br/><br/>You will now be shown some black and white photos of paintings one after the other. Please rate each painting using the scale below on <strong>how much you like it</strong> (1 being "not at all" and 7 being "very much"). Take your time and look at the paintings carefully before you rate them! <br/><br/>When you are ready, press the button to start the experiment ...',
    buttonText: 'Start'
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
    text: 'Take a short break and relax your eyes! Keep in mind that the distance to the screen should remain approximately one arm\'s length. <br/><br/>The second part of the experiment starts here. Again you will be shown some black and white photos of paintings one after the other. This time please rate each painting using the scale below on <strong>how well you can identify patterns in that painting </strong>(1 being "not at all" and 7 being "very much"). Take your time and look at the paintings carefully before you rate them! <br/><br/>When you are ready, press the button to continue the experiment ...',
    buttonText: 'Continue'
});

const b2_exp = babeViews.view_generator("rating_scale", {
    trials: trial_info.b2_exp.length,
    name: 'b2_exp',
    data: trial_info.b2_exp,
});

const outro_data = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'outro_data',
    title: 'YOUR DATA',
    text: '<strong>Don\'t close the window yet! </strong><br/><br/>Please click on "Submit" to complete the experiment and ensure that your results will be sent. <br/><br/>It is completely voluntary to provide the following data, but improves our evalutation of the experiment.',
    buttonText: 'Submit',
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
                          <!-- <option value="NA">not want to specify</option> -->
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

const outro_thanks = babeViews.view_generator("thanks",{
    trials: 1,
    name: 'outro_thanks',
});

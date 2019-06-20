// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `This is a sample introduction view.
            <br />
            <br />
            The introduction view welcomes the participant and gives general information
            about the experiment. You are in the <strong>${coin}</strong> group.
            <br />
            <br />
            This is a minimal experiment with one forced choice view. It can serve as a starting point for programming your own experiment.`,
   buttonText: 'Begin the experiment'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text:  `This is a sample instructions view.
            <br />
            <br />
            Tell your participants what they are to do here.`,
    buttonText: 'go to trials'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'post_test',
    title: 'Additional information',
    text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view
const forced_choice_2A = babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.forced_choice.length,
    // name should be identical to the variable name
    name: 'forced_choice_2A',
    data: trial_info.forced_choice,
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale




const intro_welcome = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro_welcome',
    title: 'WELCOME',
    text: 'This is the welcome screen ...',
    buttonText: 'Start'
});

const intro_resolution = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro_resolution',
    title: 'RESOLUTION CHECK',
    text: 'Check your screen resolution here ...',
    buttonText: 'Continue'
});

const test_instruction = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'test_instruction',
    title: 'TEST INSTRUCTION',
    text: 'We will check your eyes soon ...',
    buttonText: 'Start Test'
});

const test_vision_options = babeViews.view_generator("forced_choice", {
    trials: trial_info.snellen.length,
    name: 'test_vision_options',
    data: trial_info.snellen,
});

const test_vision = babeViews.view_generator("textbox_input", {
    trials: trial_info.snellen2.length,
    name: 'test_vision',
    data: trial_info.snellen2,
});

const test_color = babeViews.view_generator("textbox_input", {
    trials: trial_info.ishihara.length,
    name: 'test_color',
    data: trial_info.ishihara,
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

const outro_data = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'outro_data',
    title: 'YOUR DATA',
    text: 'Type in your shit here ...',
    age_question: 'Age',
    gender_question: 'Gender',
    buttonText: 'Next',
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

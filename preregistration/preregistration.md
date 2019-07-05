
# Background
> "The finding of this strong correlation between detectability and preference offers wide implications for art history and human cognition as it points to a mechanism that allows us to derive pleasure from searching for and finding meaningful patterns." [1] <br>

Gestalt theory has been around for a while but it was never initially proven, that people prefer art in which they can recognize patterns and structures. The experiment we reproduce acknowledge this lack of scientific proof of a relation that was proposed in many different contexts: philosophy, psychology and neuroscience. Cubist art is chosen since it is a mixture of forms, which need to be assembled by the viewer - and that are more or less easy to detect. Reviewing the experiment we noticed that only 20 participants were tested and a strong positive correlation between likliness and understanding was suggested [1]. We aim to have more participants for our study to get a broader and more reliable result. <br>
We are also curios about 60 monochrome paintings, that were used in the experiment but were not mentioned at all in the paper. Therefore 
we reduced stimuli to the monochrome images to see if the result are still as clear and the corelation is as strong as suggested in the original study. Furthermore the question is wether it increases or decreases the effect shown in the paper. Apart from that it takes the focus from the object recognition due to colour to object recognition to the mere form of the image. Apart from that the use of only 60 images improves the time it takes the participant to complete the experiment and ensures a higher concentration throughout the experiment.


# Research questions
Is there a positive relation between the recognition of patterns and structures and the likleness of a cubist painting?

# Design of the Experiment

## General remarks about the design

It is a one factorial subject study?

## Sampling plan

### Participants
We plan on recruiting as many participants as possible, but we would like to have at least 40, to give a broader outcome for the study.
Potential participants include: <br>
* course members <br>
* other students via mailing lists <br>
* friends, family <br>

### Restrictions
- people with impaired vision without correction (shortsightedness/longsightedness)
- people with expertise in cubist art


## Materials
To garantee a data acquisition as similar as possible to the original experiment we use the same material. 
   - To ensure normal/corrected-to-normal vision: <br>
     * Standard Snellen's eye chart test <br>
   - the images of the Black and white cubist paintings (from now on only to be called images) from the original experiment <br>
     * 60 cubist Paintings: Pablo Picasso (22), Georges Braque (18) and Juan Gris (20) <br>
     * the images are adapted to 450 pixels width and 600 pixels height <br>
     * there are only monochrome images <br>
   

## Procedure
The exeriment is conducted as a browser experiment participants can access online. It is diveded in three major blocks, first the introduction, used to explain the following tasks and to perform vision tests and request former knowledge in cubist art, followed by the main experiment which consists of two blocks.

### Introduction
The introduction part consistis of following sections. <br>
1. Welcome message and short describtion of the procedure in general. <br>
2. Request about former knowledge in cubist art: <br>
   * „Do you consider yourself an expert in Cubist art or were you ever engaged in any kind of cubist art education?“ <br>
   * Participants who answer "Yes" have to be excluded after data aquisition. <br>
3. Snellen's Eye Chart Test: We will show the participent a snellen chart and ask them to write down from which line they find it difficult to read.  <br>
4. Ensuring approx. Same size of images and vision tests every screen for all participants.  <br>
 

### Experiment Part 1: Preference Rating
1. Description of the task <br>
2. Task itself: <br>
    * Participants are shown 60 Stimuli in randomized order <br>
    * Each image has to be rated on liking using a 7-point-Likert-scale from 1 ('not at all') to 7 ('very') <br>
  
### Experiment Part 2: Detectability
1. Description of the task<br>
2. Task itself: <br>
    * Participants are shown same 60 Stimuli in randomized order <br>
    * Each image has to be rated on how well object can be detected using a 7-point-Likert-scale from 1 ('not at all') to 7 ('very') <br>
  
### Closing Part

Last part consists of a Consent Form which asks the participent to allow us to use their data for our project. And a
thank you message saying 'Thank you for your participation'.

## Measured variables
The data aquisition will assign several values from an ordninal skala from 1 to 7 (see above) to each image for <br>
- Detactability (X) <br>
- Linking (Y) <br>
such that for each picture an average value can be computed.

# Analysis Plan

## Exclusion criteria
1. for single image/trial data: <br>
    * if they took > 2min to decide for one image (to ensure that the participant is not to distracted)<br>
    * if they answered in < 3s <br>
    * if they rated all likeliness/recognitions the same
2. whole participant data excluded:<br>
    * if 3 images answered in less than 3 sec<br>
    * Whole participant excluded if they took longer than 3 min for each of 5 continuos paintings<br>
    * if they do not pass vision test<br>
    * if they have expertise in cubist art <br>
    
## Confirmatory hypothesis testing

### Data
Our clean data will have following format (example):

<b> Liking: </b> <br>

Image #  | Participant01 | Participant02 | ...        | Average   |
-------- | --------      | --------      | --------   | --------  |
001      | 4             | 6             | ...        | ...       |
002      | 6             | 7             | ...        | ...       |
...      | ...           | ...           | ...        | ...       |


<b> Detectability: </b> <br>

Image #  | Participant01 | Participant02 | ...        | Average   |
-------- | --------      | --------      | --------   | --------  |
001      | 3             | 5             | ...        | ...       |
002      | 5             | 7             | ...        | ...       |
...      | ...           | ...           | ...        | ...       |

<b> Results in: </b> <br>

Image #  | Liking_Average | Detectability_Average | 
-------- | --------      | --------               | 
001      | 5             | 4                      | 
002      | 6             | 6                      | 
...      | ...           | ...                    | 




## Analysis

The analysis of the original paper was done with a linear regression after averaging the liking and detectability for each image. 
On recommendation of Michael Franke we are planning on doing a baysian analysis in r.


## Resources

[1] MUTH, Claudia; PEPPERELL, Robert; CARBON, Claus-Christian. Give me Gestalt! Preference for cubist artworks revealing high detectability of objects. Leonardo, 2013, 46. Jg., Nr. 5, S. 488-489.



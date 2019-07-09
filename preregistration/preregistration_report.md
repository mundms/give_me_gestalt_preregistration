
# Background
> "The finding of this strong correlation between detectability and preference offers wide implications for art history and human cognition as it points to a mechanism that allows us to derive pleasure from searching for and finding meaningful patterns." [1] <br>

Gestalt theory has been around for a while but it was never initially proven, that people prefer art in which they can recognize patterns and structures. The experiment we reproduce acknowledge this lack of scientific proof of a relation that was proposed in many different contexts: philosophy, psychology and neuroscience. Cubist art is chosen since it is a mixture of forms, which need to be assembled by the viewer - and that are more or less easy to detect. Reviewing the experiment we noticed that only 20 participants were tested and a strong positive correlation between likliness and understanding was suggested [1]. We aim to have more participants for our study to get a broader and more reliable result. <br>
We are also curios about 60 monochrome paintings, that were used in the experiment but were not mentioned at all in the paper. Therefore 
we reduced stimuli to the monochrome images to see if the result are still as clear and the corelation is as strong as suggested in the original study. Furthermore the question is wether it increases or decreases the effect shown in the paper. Apart from that it takes the focus from the object recognition due to colour to object recognition to the mere form of the image. Apart from that the use of only 60 images improves the time it takes the participant to complete the experiment and ensures a higher concentration throughout the experiment.


# Research questions
Is there a positive relation between the recognition of patterns and structures and the likeliness of a cubist painting?

# Hypothesis
With a higher pattern detectabity in a cubist painting the participant's likeliness of the painting is also higher.



# Design of the Experiment

## General remarks about the design

It is a one factorial subject study with two variables "likeliness" and "detectability". Our variables are dependent, because we assume that the likeliness of a painting is linked to pattern recognition within the painting. The variable likeliness is asked with the question "How much do you like this painting?" and the variable detectability is asked with the question "How well can you identify patterns in this painting?". Each variable is messured on a 7 point ordinal scale from 1 being "not at all" to 7 being "very much". The design of the study is within-subjects.



## Sampling plan

### Participants
We plan on recruiting as many participants as possible, but we would like to have at least 40, to give a broader outcome for the study.
Potential participants include: <br>
* course members <br>
* other students via mailing lists <br>
* friends, family <br>

### Restrictions
- people with impaired vision without correction (shortsightedness/longsightedness)


## Materials
To guarantee a data acquisition as similar as possible to the original experiment we use the same material. 
   - To ensure normal/corrected-to-normal vision: <br>
     * Standard Snellen's eye chart test <br>
   - the images of monochrome cubist paintings (from now on only to be called images) from the original experiment <br>
     * 60 cubist paintings: Pablo Picasso (22), Georges Braque (18) and Juan Gris (20) <br>
     * the images are adapted to 450 pixels width and 600 pixels height <br>
   

## Procedure
The experiment is conducted as a browser experiment participants can access online. It is divided into the following sections: 

#### 1. Introduction and Preparation
1.1 Welcome<br>
1.2 Resolution Check<br>
1.3 Snellen Test<br>
1.4 Question about expertise in cubist art<br>

#### 2. Experiment
2.1 Block 1: Rating of Likeliness<br>
2.2 Block 2: Rating of Detectablitiy<br>

#### 3. Outro
3.1 Data Form<br>
3.2 Thanks<br>


### 1. Introduction and Preparation
First we welcome the participants and ask them to use a PC or Laptop. We ensure that all participants see the experiment in approximately the same resolution by letting them match a credit card to an outline of a credit card presented on the screen. After setting the viewport we check the eyesight of the participants with the Snellen's Eye Chart Test. We will show the participent a snellen chart and ask them to write down the number of the last row where they can recognise all letters.
 

### 2. Experiment
The experiment section consists of two blocks. In each block 60 images are shown to the participants in randomized order. Both blocks contain the same 60 images. The order of the blocks is fixed. We want to test the likeliness of the images first to let the participants get an overall impression of the images without looking too closely at the structure as the participants are asked to do in the second block. The image rating and the questions asked are as described in the general remarks about the design (7-point-scale).


### 3. Outro

In the last section the participants can provide personal information including age, gender and further comments. This information is voluntary. After pressing the "Submit" button the data will be sent and a thank you message is shown.

## Measured variables
The data aquisition will assign several values from an ordninal scale from 1 to 7 (see general remarks about the design) to each image for <br>
- Detactability (X) <br>
- Linking (Y) <br>
such that for each image an average value can be computed. We try to find out more about the dependency of the variables. <br>
We also collect control variables namely the result of the Snellen's eye chart test ("snellen_result"), prior knowledge about cubist art ("is_expert", dichotom), age and gender. We reserve the right to evaluate people with expertise in cubist art differently because they might have seen the presented paintings beforehand and therfore could be influenced by their prior knowledge about the painting. Apart from that we assume that they might have different opinions on what makes a cubist painting likeable.


# Analysis Plan

## Exclusion criteria

Participants who tend to give always the same rating and therefore have much faster reaction times then average are excluded as well as participants who take to long to rate the images, because we assume that they are distracted and can not concentrate on the experiment anymore.

1. a single trial will be excluded: <br>
    * if the participant took more than 2 minutes to rate one image<br>
    * if the participant answered in less than 3 seconds
2. whole participant data will be excluded:<br>
    * if the participant choose the same value for all images in likeliness or detectability
    * if 5 images answered in less than 3 seconds<br>
    * if the participant took twice the average experiment time or longer
    * if the participant is not able to fully recognize row 7 anymore (snellen_result < 7)<br>
    
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



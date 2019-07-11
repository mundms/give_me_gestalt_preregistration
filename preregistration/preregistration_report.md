
# Background
> "The finding of this strong correlation between detectability and preference offers wide implications for art history and human cognition as it points to a mechanism that allows us to derive pleasure from searching for and finding meaningful patterns." [1] <br>

Gestalt theory has been around for a while but it was never initially proven, that people prefer art in which they can recognize patterns and structures. The experiment we reproduce acknowledge this lack of scientific proof of a relation that was proposed in many different contexts: philosophy, psychology and neuroscience. Cubist art is chosen since it is a mixture of forms, which need to be assembled by the viewer - and that are more or less easy to detect. Reviewing the experiment we noticed that only 20 participants were tested and a strong positive correlation between liking and understanding was suggested [1]. We aim to have more participants for our study to get a broader and more reliable result. <br>
We are also curios about 60 monochrome paintings, that were used in the experiment but were not mentioned at all in the paper. Therefore 
we reduced stimuli to the monochrome images to see if the result are still as clear and the corelation is as strong as suggested in the original study. Furthermore the question is wether it increases or decreases the effect shown in the paper. Besides, it takes the focus from the object recognition due to colour to object recognition to the mere form of the object. Additionally, he use of only 60 images improves the time it takes the participant to complete the experiment and ensures a higher concentration throughout the experiment.


# Research questions
Is there a positive correlation between the recognition of patterns and structures and the liking of a cubist painting?

# Hypothesis
Independent variable V1: Score of Detectability <br>
Dependent variable V2: Score of Liking <br>
<br>
H0: r = 0 between V1 and V2 <br>
H1: r > 0 between V1 and V2 <br>
H2: r < 0 between V1 and V2 <br>

# Design of the Experiment

## General remarks about the design

It is a one factorial subject study with two variables "liking" and "detectability". The variable liking is asked with the question "How much do you like this painting?" and the variable detectability is asked with the question "How well can you identify patterns in this painting?". Each variable is messured on a 7 point ordinal scale from 1 being "not at all" to 7 being "very much". The design of the study is within-subjects.



## Sampling plan

### Participants
We plan on recruiting as many participants as possible, but we would like to have at least 40, to give a broader outcome for the study.
Potential participants include: <br>
* course members <br>
* other students via mailing lists <br>
* friends, family <br>

### Restrictions
We do no not have any a priori restrictions. For further details in dealing with outliers see analysis plan below.


## Materials
To guarantee a data acquisition as similar as possible to the original experiment we use the same material. 
   - To ensure normal/corrected-to-normal vision: <br>
     * Standard Snellen's Eye Chart Test <br>
   - the images of monochrome cubist paintings (from now on only to be called images) from the original experiment <br>
     * 60 cubist paintings: Pablo Picasso (22), Georges Braque (18) and Juan Gris (20) <br>
     * the images are adapted to 450 pixels width and 600 pixels height <br>
   

## Procedure
The experiment is conducted as a browser experiment participants can access online. It is divided into the following sections: 

#### 1. Introduction and Preparation
1.1 Welcome<br>
1.2 Resolution Check<br>
1.3 Snellen's Eye Chart Test<br>
1.4 Question about expertise in cubist art<br>

#### 2. Experiment
2.1 Block 1: Rating of Liking<br>
2.2 Block 2: Rating of Detectablitiy<br>

#### 3. Outro
3.1 Data Form<br>
3.2 "Thank you" message<br>


### 1. Introduction and Preparation
First we welcome the participants and ask them to use a PC or Laptop. We ensure that all participants see the experiment in approximately the same resolution by letting them match a credit card to an outline of a credit card presented on the screen. After setting the viewport we check the eyesight of the participants with the Snellen's Eye Chart Test. We will show the participent a Snellen's Eye Chart and ask them to write down the number of the last row where they can recognise all letters.
 

### 2. Experiment
The experiment section consists of two blocks. In each block 60 images are shown to the participants in randomized order. Both blocks contain the same 60 images. The order of the blocks is fixed. To make our and the original experiment comparable we decided to keep the same order. The image rating and the questions asked are as described in the general remarks about the design (7-point-scale).


### 3. Additional Information

In the last section the participants can provide personal information including age, gender and further comments. This information is voluntary. After pressing the "Submit" button the data will be sent and a "Thank you" message is displayed.

## Measured variables
The data aquisition will assign several values from an ordninal scale from 1 to 7 (see general remarks about the design) to each image for <br>
- Detactability (independent, x-axis) <br>
- Linking (dependent, y-axis) <br>

We also collect control variables, namely the result of the Snellen's Eye Chart Test ("snellen_result"), prior knowledge about cubist art ("is_expert", dichotom) and age. <br>
  * We will run an additional analysis for participants who fail the Snellen's Eye Chart Test (value <= 6) to compare their results to participants who pass the test (value >= 7). <br>
  * We will test whether age has an effect on liking and detectability scores, by correlating each of the two variables with age. <br>
  * for handling of experts see exclusion criterias below

# Analysis Plan

## Exclusion criteria

1. the dataset of a participant will be excluded if the participant choose the same value for all images in liking and/or detectability. <br>
2. a trial will be excluded if the standard deviation of the RT is +/-2.5% <br>
3. To detect outliers in terms of liking or detectability for a single trial, we will calculate the standard deviation of the their distributions. Whether these values will be excluded will be evaluated if they skew the correlation strongly. <br>
4. We reserve the right to exclude people with expertise in cubist art in case their answers differ from the data of participants without expertise in cubist art. We decided to do that because they might have seen the presented paintings beforehand and therefore could be influenced by their prior knowledge about the paintings. We assume that they might have different opinions on what makes a cubist painting likeable. In general, experts probably have higher scores in liking and are able to detect patterns better. <br>

As said above, the failed Snellen Test will not lead to exclusion, but to a comparison of the two groups.
    
## Confirmatory hypothesis testing

### Data
Our clean data will have following format (example): <br>

image#   | submissionID  | Liking        | Detectability   | ...       |
-------- | --------      | --------      | --------        | --------  |
001      | 1             | 6             | 4               | ...       |
001      | 2             | 7             | 5               | ...       |
...      | ...           | ...           | ...             | ...       |
002      | 1             | 5             | 2               | ...       |
002      | 2             | 3             | 1               | ...       |
...      | ...           | ...           | ...             | ...       |

### Analysis

The analysis of the original paper was done with a linear regression. We plan to replicated this to compare the results.
On recommendation of Michael Franke we are planning on doing a baysian analysis in r, as well. <br>

#### Linear Regression

1. Testing assumptions for linear regression: <br>
  * Shapirotest for testing normality of the distribution of liking and detectability variables
  * gvlma package for testing
    * Global Stat	
    * Skewness		
    * Kurtosis	
    * Link Function	
    * Heteroscedasticity

   ```
   hist(final_data$liking)
   hist(final_data$detectability)
   par(mfrow=c(2,2))
   typeof(final_data)

   mod <- lm(final_data$liking ~ final_data$detectability, data=final_data)
   gvlma::gvlma(mod)
   ```
   
2. Calculating correlation
```
cor(final_data$liking, final_data$detectability)
```
3. Ploting 
   
#### Bayesian Fixed-effects Model

We use the recommended bayesian fit model called bmr function and tried different approaches: <br>

Cumulative Family: <br>
```
brm_data_cumulative <- brm(formula=liking ~ mo(detectability), data=final_data_mutated, family = "cumulative")
```
Cumulative family for mixed/random effects: <br>
```
brm_mixed <- brm(formula=liking ~ mo(detectability) + (1|submission_id), data=final_data_mutated, family = "cumulative")
summary(brm_mixed)
```

```
brm_mixed2 <- brm(formula=liking ~ mo(detectability) + (1|submission_id) + (1|fileID), data=final_data_mutated, family = "cumulative")
summary(brm_mixed2)
```

To compare the different models we use the loo function:
```{r}
loo(brm_data_cumulative, brm_mixed)
loo(brm_data_cumulative, brm_mixed2)
loo(brm_mixed, brm_mixed2)
```

## Resources

[1] MUTH, Claudia; PEPPERELL, Robert; CARBON, Claus-Christian. Give me Gestalt! Preference for cubist artworks revealing high detectability of objects. Leonardo, 2013, 46. Jg., Nr. 5, S. 488-489.



library(tidyverse)
library(brms)

set.seed(2969)

# create dummy data

d = tibble(
  # sample 50 object-ratings (uniformly at random)
  objects = sample(1:7, size = 100, replace = T), 
  # sample likeability ratings that tend to increase with object ratings
  likeability = map_dbl(objects, function(o) {
    l = rnorm(n = 1, mean = o, sd = 3) %>% round(0)
    l = max(l,1)
    min(l,7)
  })
)

# inspect data
ggplot(d, aes(x = objects, y= likeability)) + geom_point() + geom_smooth(method = "lm")

# cast data into appropriate type
d = mutate(d, 
           likeability = factor(likeability, ordered = T),
           objects_ord = factor(objects)
           )

# 1. simple analysis: "objects" ratings treated interval scale / metric
m_metric = brm(formula = likeability ~ objects,
               data = d,
               family = cumulative("logit"))

############################################################################
# 2. more complex analysis: "objects" ratings treated as categorical
############################################################################

# define a forward contrast : this way each next level (number) will be compared to the 
# previous level (number)
forward_contrasts = matrix(c(0,0,0,0,0,0,
                             1,0,0,0,0,0,
                             1,1,0,0,0,0,
                             1,1,1,0,0,0,
                             1,1,1,1,0,0,
                             1,1,1,1,1,0,
                             1,1,1,1,1,1
                             ), byrow = T, ncol = 6)
colnames(forward_contrasts) = paste0(".", 2:7)
rownames(forward_contrasts) = paste0(".", 1:7)

contrasts(d$objects_ord) = forward_contrasts

m_ordered = brm(formula = likeability ~ objects_ord,
                data = d ,
                family = cumulative("logit"))






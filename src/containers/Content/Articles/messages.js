/*
 * Articles Messages
 *
 * This contains all the text for the Articles Container.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  wvcTitle: {
    id: 'app.container.Content.Articles.wvcTitle',
    defaultMessage: 'A Bipartite Graph Model Approach For Discriminant Features Evaluation',
  },
  wvcSubtitle: {
    id: 'app.container.Content.Articles.wvcSubtitle',
    defaultMessage: 'WVC (Computer Vision Workshop)',
  },
  wvcDescription: {
    id: 'app.container.Content.Articles.wvcDescription',
    defaultMessage: `Article published in Proceedings of WVC 2015 with the title
    "A Bipartite Graph Model Approach For Discriminant Features Evaluation". In this article, we propose a
    bipartite graph model able to evaluate how much a feature is discriminant, according to our metric
    based in graph topology. This article was produced using my scientific initiation research.
    It was presented in the Oral Session in São Carlos, SP - Brazil.`,
  },
});
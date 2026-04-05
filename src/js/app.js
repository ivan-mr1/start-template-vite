'use strict';

import pageNavigation from 'src/shared/lib/page-navigation/pageNavigation';
import ScrollUpButton from 'src/shared/ui/scrollUpButton/ScrollUpButton';

window.addEventListener('DOMContentLoaded', () => {
  pageNavigation();
  new ScrollUpButton();
});

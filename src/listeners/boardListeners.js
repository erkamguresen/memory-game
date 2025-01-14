import {
  showCellTemp,
  showOrHideCellPermanent,
  hideCellValue,
} from '../handlers/boardHandlers.js';

document.getElementById('tiles').addEventListener('mouseover', showCellTemp);
document.getElementById('tiles').addEventListener('mouseout', hideCellValue);
document
  .getElementById('tiles')
  .addEventListener('click', showOrHideCellPermanent);

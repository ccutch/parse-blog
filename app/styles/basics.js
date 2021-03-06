// basic switch

.checkbox_label {
  position: relative;
  display: block;
  height: 20px;
  width: 44px;
  background: #898989;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lbl:after {
  position: absolute;
  left: -2px;
  top: -3px;
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 100px;
  background: #fff;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.05);
  content: '';
  transition: all 0.3s ease;
}

.lbl:active:after {
  transform: scale(1.15, 0.85);
}

.checkbox:checked ~ label {
  background: #6fbeb5;
}

.checkbox:checked ~ label:after {
  left: 20px;
  background: #179588;
}

.checkbox:disabled ~ label {
  background: #d5d5d5;
  pointer-events: none;
}

.checkbox:disabled ~ label:after {
  background: #bcbdbc;
}


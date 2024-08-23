import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {
    handleAdd(){
        this.dispatchEvent(new CustomEvent('add'));
    }
    handleSubtract(){
        this.dispatchEvent(new CustomEvent('subtract'));
    }
    handleMultiply(event){
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('Multiply', {detail: factor}));
    }
    factors = [0,2,3,4,5,6];
   
}
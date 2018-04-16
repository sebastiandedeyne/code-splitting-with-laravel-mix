import Vue from 'vue';
import MyBigFatComponent from './components/MyBigFatComponent';

export default function () {
    new Vue({
        el: '#component',

        components: {
            MyBigFatComponent,
        },
    });
}

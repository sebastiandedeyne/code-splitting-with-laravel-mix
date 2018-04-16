import initResponsiveNav from './initResponsiveNav';

initResponsiveNav();

if (document.getElementById('component')) {
    import('./initMyBigFatComponent' /* webpackChunkName: "js/my-component" */)
        .then(initMyBigFatComponent => {
            initMyBigFatComponent.default();
        });
}

import preloader from '../../../assets/images/preloader.gif';


const Preloader = () => {
    return (
        <div className="preloaderContainer">
            <img src={preloader} />
        </div>
    );
};

export default Preloader;
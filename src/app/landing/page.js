import Page_nav from "../pagenowservice/page_nav";
import Pagehero from "../pagenowservice/pagehero";
import Pagefeature from "../pagenowservice/pagefeature";
import FeaturesSection from "../pagenowservice/pagesimplify";
import Pagepricing from "../pagenowservice/pagepricing";
import Pagefaq from "../pagenowservice/pagefaq";
import Pagefooter from "../pagenowservice/pagefooter";

export default function Finance() {
    return (
        <>
            <Page_nav />
            <Pagehero />
            <Pagefeature />
            <FeaturesSection />
            <Pagefaq />
            <Pagepricing />
            <hr />
            <Pagefooter />
        </>
    );
}

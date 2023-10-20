import oneSM from "../Assets/images/one/one_sm.jfif";
import oneMD from "../Assets/images/one/one_md.jfif";
import oneLG from "../Assets/images/one/one_lg.jfif";
import oneORG from "../Assets/images/one/one_org.jfif";

function ModelS(){
    return(
        <div className="h-screen w-full bg-gray-100/50 relative">
            <picture className="object-fill w-full h-full">
                <source media="(max-width: 599px)" srcSet={oneSM} />
                <source media="(min-width: 600px)" srcSet={oneMD} />
                <source media="(min-width: 600px) and (orientation:portrait)" srcSet={oneLG} />
                <img src={oneORG} alt="car1" className="object-cover w-full h-full" />
            </picture>
        </div>
    )
}
export default ModelS;

import WindowWrapper from "#hoc/WindowWrapper.jsx";
import windowWrapper from "#hoc/WindowWrapper.jsx";
import {techStack} from "#constants/index.js";
import {Check,Flag} from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";


const Terminal = () => {
    return (
        <>
        <div id="window-header">
            <WindowControls target="terminal"/>
            <h2>Tech Stack</h2>

        </div>

        <div className="techstack">
            <p>
                <span className="font-bold">@Aashrith % </span>
                show tech stack
            </p>

            <div className="label">
                <p className="w-32 font-georama font-bold">Category</p>
                <p>Technologies</p>
            </div>

            <ul className="content">
                {techStack.map(({category,items}) => (
                    <li key={category} className="flex items-center">
                        <Check className="check text-green-400" size={20}></Check>
                        <h3 className="flex font-bold font-georama justify-center align-items">{category}</h3>
                        <ul>
                            {items.map((item,i) => (
                                <li key={i}>{item} {i < items.length - 1 ? "," : ""}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <div className="footnote">
                <p>
                    <Check className="check text-green-700" size={20}></Check> 5 of 5 stacks loaded successfully, (100%)
                </p>

                <p className="text-black">
                    <Flag size={15} fill="black" />
                    Render time : 8ms
                </p>
            </div>
            </div>

    </>
    )
}

const TerminalWindow = WindowWrapper(Terminal,'terminal');

export default TerminalWindow
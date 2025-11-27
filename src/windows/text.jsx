import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components/index.js";
import useWindowStore from "#store/window.js";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data || {};

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="bg-white h-full p-4 overflow-auto flex flex-col gap-4">
        {image ? (
          <img
            src={image}
            alt={name || "text file image"}
            className="w-32 h-32 object-cover rounded"
          />
        ) : null}

        {subtitle ? <h3 className="text-lg font-semibold">{subtitle}</h3> : null}

        {Array.isArray(description) && description.length > 0 ? (
          <div className="flex flex-col gap-3 leading-relaxed text-sm text-gray-800">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;

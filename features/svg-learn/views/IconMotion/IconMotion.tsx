import SVGDownload from "@/features/svg-learn/views/IconMotion/components/SVGDownload/SVGDownload";
import SVGChecklist from "@/features/svg-learn/views/IconMotion/components/SVGChecklist/SVGChecklist";
import SVGCursorClick from "@/features/svg-learn/views/IconMotion/components/SVGCursorClick/SVGCursorClick";

const IconMotion = () => {

    return (
        <div className="flex mt-6 mx-6 gap-4">
            <SVGDownload/>
            <SVGChecklist/>
            <SVGCursorClick />

        </div>

    )
}

export default IconMotion;

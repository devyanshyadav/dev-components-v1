
import React from "react";
import ComponentPreview from "@/app/Components/ComponentPreview";
import DevRichTextEditor from "@/app/Preview_components/RichTextEditors/DevRichTextEditor";
import RichTextEditorsInfo from "@/app/Preview_components/RichTextEditors/RichTextEditorsInfo";

const page = () => {
    return (
        <>
            <ComponentPreview
                component_name={RichTextEditorsInfo[0].title}
                component_details={RichTextEditorsInfo[0].details}
                component_usage_code={RichTextEditorsInfo[0].usage_code}
                component_preview={
                    <DevRichTextEditor />
                }
                component_code={RichTextEditorsInfo[0].code}
                component_packages={RichTextEditorsInfo[0].packages}
            />
        </>
    );
};

export default page;

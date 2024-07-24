import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";
import { Button } from "@/components/ui/button";

type Props = {
    onUpload: (results: any) => void;
};

export const UploadButton = ({ 
    onUpload 
}: Props) => {
    const { CSVReader } = useCSVReader();

    return (
        <CSVReader onUploadAccepted={onUpload}>
            {({ getRootProps }: any) => (
                <Button
                    size="sm"
                    className="w-full lg:w-auto bg-slate-50 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-slate-50"
                    {...getRootProps()}
                >
                    <Upload className="size-4 mr-2"/>
                    Import
                </Button>
            )}
        </CSVReader>
    )
}
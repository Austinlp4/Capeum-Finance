import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Props = {
    columnIndex: number;
    selectedColumns: Record<string, string | null>;
    onChange: (columnIndex: number, value: string | null) => void;
};

const options = [
    "amount",
    "payee",
    "date",
];

export const TableHeadSelect = ({
    columnIndex,
    selectedColumns,
    onChange,
}: Props) => {
    const currentSelect = selectedColumns[`column-${columnIndex}`];

    return (
        <Select
            value={currentSelect || ""}
            onValueChange={(value) => onChange(columnIndex, value)}
        >
            <SelectTrigger
                className={cn(
                    "focus:ring-offset-0 focus:ring-transparent outlinne-none border-none capitalize bg-muted",
                    currentSelect && "text-emerald-500"
                )}
            >
                <SelectValue placeholder="Skip" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="skip">
                    Skip
                </SelectItem>
                {options.map((option, index) => {
                    const disabled = 
                        Object.values(selectedColumns).includes(option)
                        && selectedColumns[`column-${columnIndex}`] !== option;
                    return (
                        <SelectItem 
                            key={index} 
                            value={option}
                            disabled={disabled}
                            className="capitalize"
                        >
                            {option}
                        </SelectItem>
                    )
                })}
            </SelectContent>
        </Select>
    )
}
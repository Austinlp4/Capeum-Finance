'use client'

import { Button } from "@/components/ui/button"
import { 
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Loader2, PlusCircle } from "lucide-react"
import { DataTable } from "@/components/data-table"
import { Skeleton } from "@/components/ui/skeleton"
import { useNewCategory } from "@/features/categories/hooks/use-new-category"
import { useBulkDeleteCategories } from "@/features/categories/api/use-bulk-delete-categories"
import { useGetCategories } from "@/features/categories/api/use-get-categories"
import { columns } from "./columns"

const CategoriesPage = () => {
    const newCategory = useNewCategory();
    const categoriesQuery = useGetCategories();
    const categories = categoriesQuery.data || [];
    const deleteCategories = useBulkDeleteCategories();

    const isDisabled = categoriesQuery.isLoading || deleteCategories.isPending;

    if(categoriesQuery.isLoading) {
        return (
            <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
                <Card className="border-none drop-shadow-sm">
                    <CardHeader>
                        <Skeleton className="h-8 w-48"/>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[500px] w-full flex items-center justify-center">
                            <Loader2 className="size-8 text-emerald-600 animate-spin"/>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
                    <CardTitle className="text-xl line-clamp-1 text-muted-foreground">
                        Categories
                    </CardTitle>
                    <Button 
                        size={'sm'} 
                        onClick={newCategory.onOpen} 
                        className="bg-emerald-600 hover:bg-emerald-500/80"
                    >
                        <PlusCircle className="size-4 mr-2" />
                        Add New
                    </Button>
                </CardHeader>
                <CardContent>
                    <DataTable 
                        columns={columns} 
                        data={categories} 
                        filterKey="name" 
                        onDelete={(row) => {
                            const ids = row.map((r) => r.original.id);
                            deleteCategories.mutate({ ids });
                        }} 
                        disabled={isDisabled}
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default CategoriesPage
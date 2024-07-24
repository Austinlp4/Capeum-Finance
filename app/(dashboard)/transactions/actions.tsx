'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Edit, Trash } from 'lucide-react';
import { useOpenTransaction } from '@/features/transactions/hooks/use-open-transaction';
import { useDeleteTransaction } from '@/features/transactions/api/use-delete-transaction';
import { useConfirm } from '@/hooks/use-confirm';

type Props = {
    id: string;
}

export const Actions = ({ id }: Props) => {
    const [ConfirmDialog, confirm] = useConfirm(
        "Are you sure?",
        "You are about to delete this transaction. This action cannot be undone."
    )

    const { onOpen } = useOpenTransaction();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const deleteMutation = useDeleteTransaction(id);

    const handleDelete = async () => {
        const ok = await confirm();

        if (ok) {
            deleteMutation.mutate();
        }
    }

    const handleOpen = () => {
        setDropdownOpen(false); // Close the dropdown menu
        onOpen(id);
    };

    return (
        <>
            <ConfirmDialog />
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='size-8 p-0'>
                        <MoreHorizontal className='size-4'/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' sideOffset={5}>
                    <DropdownMenuItem
                        onClick={handleOpen} // Use onClick instead of onSelect
                        disabled={deleteMutation.isPending}
                    >
                        <Edit className='size-4 mr-2'/>
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={handleDelete} // Use onClick instead of onSelect
                        disabled={deleteMutation.isPending}
                    >
                        <Trash className='size-4 mr-2'/>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

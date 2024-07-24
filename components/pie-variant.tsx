import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

import { formatPercentage } from '@/lib/utils';
import { CategoryTooltip } from './category-tooltip';

const COLORS = ['#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f87171', '#fbbf24'];

type Props = {
    data: {
        name: string;
        value: number;
    }[];
};

export const PieVariant = ({
    data,
}: Props) => {
    return (
        <ResponsiveContainer width='100%' height={350}>
            <PieChart>
                <Legend 
                    layout="vertical"
                    verticalAlign='bottom'
                    align='left'
                    iconType='circle'
                    content={({ payload }: any) => {
                        return (
                            <ul className='flex flex-col space-y-2'>
                                {payload.map((entry: any, index: number) => (
                                    <li 
                                        key={`item-${index}`}
                                        className='flex items-center space-x-2'
                                    >
                                        <span 
                                            className='size-2 rounded-full'
                                            style={{ backgroundColor: entry.color }}
                                        />
                                        <div className='space-x-1'>
                                            <span className='text-sm text-muted-foreground'>
                                                {entry.value}
                                            </span>
                                            <span className='text-sm'>
                                                {formatPercentage(entry.payload.percent * 100)}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )
                    }}
                />
                <Tooltip content={<CategoryTooltip />}/>
                <Pie
                    data={data}
                    cx='50%'
                    cy='50%'
                    outerRadius={90}
                    fill="#8884d8"
                    innerRadius={60}
                    paddingAngle={2}
                    dataKey='value'
                    labelLine={false}
                >
                    {data.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};
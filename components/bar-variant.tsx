import { format } from 'date-fns';
import {
    Tooltip,
    XAxis,
    BarChart,
    Bar,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';

import { CustomTooltip } from './custom-tooltip';

type Props = {
    data: {
        date: string;
        income: number;
        expenses: number;
    }[];
};

export const BarVariant = ({
    data,
}: Props) => {
    return (
        <ResponsiveContainer width='100%' height={350}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    axisLine={false}
                    tickLine={false}
                    dataKey={'date'}
                    tickFormatter={(value) => format(value, 'MMM dd')}
                    style={{ fontSize: '12px' }}
                    tickMargin={16}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                    dataKey="income"
                    fill="#10b981"
                    className='drop-shadow-md'
                />
                <Bar
                    dataKey="expenses"
                    fill="#f59e0b"
                    className='drop-shadow-md'
                />
            </BarChart>
        </ResponsiveContainer>
    );
};
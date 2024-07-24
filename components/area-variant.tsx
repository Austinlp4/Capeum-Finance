import {
    Tooltip,
    XAxis,
    AreaChart,
    Area,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';
import { format } from 'date-fns';
import { CustomTooltip } from './custom-tooltip';

type Props = {
    data: {
        date: string;
        income: number;
        expenses: number;
    }[];
};

export const AreaVariant = ({
    data,
}: Props) => {
    return (
        <ResponsiveContainer width='100%' height={350}>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <defs>
                    <linearGradient id='income' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='2%' stopColor="#10b981" stopOpacity={.8}/>
                        <stop offset='98%' stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id='expenses' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='2%' stopColor="#f59e0b" stopOpacity={.8}/>
                        <stop offset='98%' stopColor="#f59e0b" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis 
                    axisLine={false}
                    tickLine={false}
                    dataKey={'date'}
                    tickFormatter={(value) => format(value, 'MMM dd')}
                    style={{ fontSize: '12px' }}
                    tickMargin={16}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                    type="monotone"
                    dataKey="income"
                    stackId="income"
                    strokeWidth={2}
                    stroke="#10b981"
                    fill="url(#income)"
                    className='drop-shadow-md'
                />
                <Area 
                    type="monotone"
                    dataKey="expenses"
                    stackId="expenses"
                    strokeWidth={2}
                    stroke="#f59e0b"
                    fill="url(#expenses)"
                    className='drop-shadow-md'
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};
import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    ResponsiveContainer
} from 'recharts'
const BarChartComponent = ({ data }) => {
    return <ResponsiveContainer width="100%" height={300} >
        <BarChart margin={{ top: 50 }} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis allowDecimals={true} />
            <Tooltip />
            <Bar dataKey="count" fill="#2cb1bc" barSize={75} />
        </BarChart>
    </ResponsiveContainer>
}

export default BarChartComponent
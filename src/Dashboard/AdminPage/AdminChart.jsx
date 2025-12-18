
import { PieChart, Pie, Sector, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import useAxiosSecure from '../../Hooks/useAxiosSecure.jsx';
import { useEffect, useState } from 'react';
import ChatLoading from '../../Components/Loading/ChatLoading.jsx';

// clean active shape (NO outside label)
const renderActiveShape = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
}) => {
  return (
    <g>
      {/* active sector */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      {/* center text */}
      <text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        fill="#333"
        fontSize={12}
        fontWeight="600"
      >
        {payload.name}
      </text>

      <text
        x={cx}
        y={cy + 12}
        textAnchor="middle"
        fill="#999"
        fontSize={10}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

export default function CustomActiveShapePieChart() {
  const axiosSecure = useAxiosSecure();
const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const resTutions = await axiosSecure.get("/tutions");
      const tutions = resTutions.data.data;

      const studentPost = tutions.filter(t => t.status === 'pending').length;
      const paymentSuccess = tutions.filter(t => t.payment === 'paid').length ;
      const jobSuccess = tutions.filter(t => t.status === 'assigned').length;

      const resTutors = await axiosSecure.get("/tutors");
      const tutors = resTutors.data.data;
      const teacherPost = tutors.filter(t => t.status === 'pending').length;

  
      const chartData = [
        { name: "Student Post pending", value: studentPost },
        { name: "Payment Success", value: paymentSuccess },
        { name: "Job Success", value: jobSuccess },
        { name: "Teacher Post pending", value: teacherPost },
      ];

      setData(chartData);

    } catch (err) {
      console.error(err);
    }
  };

  fetchData();
}, []);


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='mb-5'>
        <h2 className='text-2xl md:text-4xl font-bold text-center underline underline-offset-2 decoration-primary decoration-4 text-secondary pb-4'>
                <span             
                className='text-primary font-extrabold'>U</span>ser <span 
                className='text-primary font-extrabold'>A</span>nalytics 
                </h2>
        <div className="w-full h-80 flex">
        <div className='w-full h-80 flex justify-center items-center '>
          {data.length > 0 ? (

              <ResponsiveContainer width="60%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="55%"
            outerRadius="75%"
            dataKey="value"
            activeShape={renderActiveShape}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
            ):(<ChatLoading />
        )}
        </div>

        <div className='w-full h-80 flex justify-center items-center '>
     {data.length > 0 ? (

     <PieChart style={{ width: '100%', maxWidth: '100%', maxHeight: '100%', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        labelLine={false}
        // label={renderCustomizedLabel}
        label={true}
        fill="#8884d8"
        dataKey="value"
        isAnimationActive={true}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
     </PieChart>
              
     ):(<ChatLoading />
        )}
        </div>
      

    </div>
    </div>
  );
}

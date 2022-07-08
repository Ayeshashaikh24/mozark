const express=require('express');
const app=express();
const courses=[
    {
        id:1,
        name:'Ayesha'
    },
    {
        id:2,
        name:'fija'
    },
    {
        id:3,
        name:'imran'
    },
];
app.get('/',(req,res)=>{
res.send('hello world');
});
app.get('/api/courses', (req,res)=>{
    res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
const course=courses.find(c=>c.id===parseInt(req.params.id));
if(!course) res.status(404).send('page not found');
res.send(course);
})
app.listen(30004,()=>console.log('listing on port 3000..'));
<template>
    <div id="headercontainer">
        <p id="headername"><i class="fas fa-plane"></i>&nbsp;&nbsp;{{projectTitle}}</p>
    </div>
</template>

<script>
    export default{
        name:'MyHeader',
        props:
        {
            projectTitle:String
        }
    }   
</script>

<style>
    #headercontainer
    {
        text-align: center;
        background-color:#001B94;
        padding:15px;
       
    }
    #headername
    {
        color:white;
        font-weight:bold;
        font-size:30px;
    }
</style>

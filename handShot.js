class HandShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.001,
            length: 10
        }
        this.pointB = pointB


        this.HandShot = Constraint.create(options);
        World.add(world, this.HandShot);
    }

    fly(){

        this.HandShot.bodyA = null;
    }

    attach(){

        this.HandShot.bodyA = this.bodyA;

        
    }

    
    display(){

        if(this.HandShot.bodyA){

            var pointA = this.HandShot.bodyA.position;
            var pointB = this.pointB;
    
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
       
    }

    

    
}
document.addEventListener('DOMContentLoaded', function() {
    var ringer = {
      countdown_to: "01/02/2024",
      rings: {
        'DAYS': {
          s: 86400000,
          max: 365
        },
        'HOURS': {
          s: 3600000,
          max: 24
        },
        'MINUTES': {
          s: 60000,
          max: 60
        },
        'SECONDS': {
          s: 1000,
          max: 60
        },
        'MICROSEC': {
          s: 10,
          max: 100
        }
      },
      r_count: 5,
      r_spacing: 10,
      r_size: 100,
      r_thickness: 2,
      update_interval: 11,
      
      init: function() {
        this.countdown_to_time = new Date(this.countdown_to).getTime();
        this.cvs = document.createElement('canvas');
        this.cvs.width = (this.r_size + this.r_thickness) * this.r_count + (this.r_spacing * (this.r_count - 1));
        this.cvs.height = (this.r_size + this.r_thickness);
        document.body.appendChild(this.cvs);
        this.ctx = this.cvs.getContext('2d');
        this.ctx.textAlign = 'center';
        this.go();
      },
      
      go: function() {
        var idx = 0;
        this.time = this.countdown_to_time - (new Date().getTime());
        
        for (var r_key in this.rings) {
          this.unit(idx++, r_key, this.rings[r_key]);
        }
        
        setTimeout(this.go.bind(this), this.update_interval);
      },
      
      unit: function(idx, label, ring) {
        var x, y, value, ring_secs = ring.s;
        value = Math.floor((this.time / ring_secs) % ring.max);
        x = (this.r_size * 0.5 + this.r_thickness * 0.5);
        x += (idx * (this.r_size + this.r_spacing + this.r_thickness));
        y = this.r_size * 0.5;
        y += this.r_thickness * 0.5;
    
        var degrees = 360 - (value / ring.max) * 360.0;
        var endAngle = degrees * (Math.PI / 180);
    
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.clearRect(-this.r_size / 2, -this.r_size / 2, this.r_size, this.r_size);
    
        // background circle
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.r_size / 2, 0, 2 * Math.PI, false);
        this.ctx.lineWidth = this.r_thickness;
        this.ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
    
        // filled arc representing the time unit
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.r_size / 2, 0, endAngle, false);
        this.ctx.lineWidth = this.r_thickness;
        this.ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
    
        // fill the arc with color
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Semi-transparent fill
        this.ctx.fill();
    
        // label text
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = '12px Helvetica';
        this.ctx.fillText(label, 0, 23);
        this.ctx.font = 'bold 40px Helvetica';
        this.ctx.fillText(value, 0, 10);
    
        this.ctx.restore();
    }
    };
  
    ringer.init();
  });  
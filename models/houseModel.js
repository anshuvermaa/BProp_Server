import mongoose from 'mongoose'

const houseSchema = mongoose.Schema(
    // propertyType: {
//     type: String,
//     enum: ['Residential', 'Commercial', 'Land']
//   },

  {
    type:{
       type:String,
       required:true,
    },
   possessionStatus:{
        type: String,
        required: true,
      },
 projectName:{
        type: String,
        required: true,
      },
 capitalAppreciation:{
        type:String,
      },
 projectArea:{
    type:Number,
    required: true,
 },
 plotAddress:{
     sector:{type: String},
     landmark:{type: String},
     locality: { type: String },
     city: { type: String, required: true },
 },
 location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
 },
 urls:{
    imgUrl:[String],
    videoUrl:[String]
 },
 wi:[String],
 investmentOverview:{
    desc:{
        type:String,
        required:true,
    },
   
 },
 locationAdvantages:{
    desc:String,
    keyPoints:[
        {
            imgUrl:String,
            title:String,
            desc:String,
        }
    ]


 },
 amenities:{
   name:[
    {
        imgUrl:String,
        title:String,
        desc:String,
    }
]
 },
price:[  
  {
    purchageprice:{
      value:{
        type:Number,
        required:true,
      },
      percent:{
        type:Number,
        required:true,
      },
    },
    
    size:{
        type:Number,
        required:true,
       },
    
       gst:{
        value:{
            type:Number,
            required:true,
          },
          percent:{
            type:Number,
            required:true,
          },
    },
    constructionCost:{
        value:{
            type:Number,
          },
          percent:{
            type:Number,
          },
    },
    otherCharges:{
        value:{
            type:Number,
          },
          percent:{
            type:Number,
          },

    },
    sdnr:{
     type:Number,
     required:true,
    }
    
   },
],

faq:[
    {
        question:{
            type:String,
        },
        answer:{
            type:String,
        }
    }
]
   
  },
  {
    timestamps: true, 
  }
)



houseSchema.index({ location: '2dsphere' });

const House = mongoose.model('house', houseSchema)

export default House








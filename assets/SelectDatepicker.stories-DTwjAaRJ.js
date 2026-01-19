import{j as o}from"./jsx-runtime-BTky52tW.js";import{R as a}from"./iframe-BWuqpQNe.js";import{S as W}from"./SelectDatepicker-C3JAmgIg.js";import"./preload-helper-PPVm8Dsz.js";class A extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r){}render(){const{hasError:r,error:t}=this.state,{children:s,fallback:i,renderFallback:l}=this.props;return r?l&&t?l(t):i||o.jsx("div",{role:"alert",style:{padding:"12px"},children:"Something went wrong while rendering the date picker."}):s}}A.__docgenInfo={description:"",methods:[],displayName:"SelectDatepickerErrorBoundary",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fallback:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},renderFallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error) => React.ReactNode",signature:{arguments:[{type:{name:"Error"},name:"error"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const I=e=>typeof e=="number"?new Date(e):typeof e=="string"&&e.trim().length>0?new Date(e):e instanceof Date?e:null,R=e=>{if(typeof e=="number")return new Date(e);if(typeof e=="string"&&e.trim().length>0)return new Date(e);if(e instanceof Date)return e},B=e=>{const r=I(e),[t,s]=a.useState(r);return a.useEffect(()=>{e!==void 0&&s(r)},[e,r]),[t,s,t??r]},k=e=>e.map((r,t)=>a.isValidElement(r)?a.cloneElement(r,{key:r.key??t}):r),F=e=>e?a.createElement("div",{style:{marginTop:"10px",padding:"10px",background:"#f6f8fa"}},k([a.createElement("strong",null,"Selected: "),a.createElement("span",null,e.toDateString())])):null,M={padding:"20px",maxWidth:"400px"},n=(e,r={})=>{const{selectedDate:t,minDate:s,maxDate:i,labels:l,className:O,..._}=e,[q,C,T]=B(t),L=a.useCallback(P=>{C(P)},[C]),j=R(s)??r.minDateFallback,N=R(i)??r.maxDateFallback,z=r.mapLabels?r.mapLabels(l):l,d=[];return r.title&&d.push(a.createElement("h3",null,r.title)),r.description&&d.push(a.createElement("p",{style:{marginBottom:"12px",color:"#555"}},r.description)),d.push(a.createElement(W,{..._,id:r.id,className:r.classNameOverride??O,selectedDate:q,onDateChange:L,onChange:L,minDate:j,maxDate:N,labels:z})),d.push(F(T)),r.extraContent?.length&&d.push(...r.extraContent),a.createElement("div",{style:{...M,...r.containerStyle}},k(d))},V={title:"SelectDatepicker",component:W,parameters:{layout:"centered"},args:{order:"month/day/year",reverseYears:!1,hideLabels:!1,disabled:!1,hasError:!1,isRequired:!1,labels:{},selectedDate:void 0,minDate:void 0,maxDate:void 0},argTypes:{order:{control:{type:"select"}},reverseYears:{control:"boolean"},hideLabels:{control:"boolean"},disabled:{control:"boolean"},hasError:{control:"boolean"},isRequired:{control:"boolean"},labels:{control:"object"},selectedDate:{control:"date"},minDate:{control:"date"},maxDate:{control:"date"},onDateChange:{table:{disable:!0}},value:{table:{disable:!0}},onChange:{table:{disable:!0}}}},c={render:e=>n(e)},m={render:e=>n(e,{title:"With Date Range",description:"Allowed range: Jan 1, 2023 – Dec 31, 2025",minDateFallback:new Date(2023,0,1),maxDateFallback:new Date(2025,11,31)})},p={render:e=>{const r={1:"Enero",2:"Febrero",3:"Marzo",4:"Abril",5:"Mayo",6:"Junio",7:"Julio",8:"Agosto",9:"Septiembre",10:"Octubre",11:"Noviembre",12:"Diciembre"};return n(e,{title:"Custom Labels + Months (Spanish)",mapLabels:t=>({groupLabel:"Selecciona tu fecha de viaje",yearLabel:"Año",monthLabel:"Mes",dayLabel:"Día",yearPlaceholder:"Selecciona año",monthPlaceholder:"Selecciona mes",dayPlaceholder:"Selecciona día",months:r,...t}),extraContent:[a.createElement("div",{style:{marginTop:"10px",color:"#555",fontSize:"13px"}},Object.values(r).join(" · "))]})},args:{order:"day/month/year"}},g={render:e=>n(e,{title:"Different Order (Day/Month/Year)"}),args:{order:"day/month/year"}},h={render:e=>{const r=new Date,{minDate:t,maxDate:s,...i}=e;return a.createElement("div",{style:M},k([a.createElement("h3",null,"Disabled State"),a.createElement(W,{...i,selectedDate:r,onDateChange:()=>{},onChange:()=>{},minDate:R(t),maxDate:R(s)}),F(r)]))},args:{disabled:!0}},u={render:e=>n(e,{title:"Error State",id:"error-state"}),args:{hasError:!0}},b={render:e=>n(e,{title:"Custom Error Messages",description:"Error messaging can be localized via labels.errorMessages.",id:"custom-error-messages"}),args:{hasError:!0,labels:{groupLabel:"Selecciona tu fecha",monthLabel:"Mes",dayLabel:"Día",yearLabel:"Año",monthPlaceholder:"Selecciona mes",dayPlaceholder:"Selecciona día",yearPlaceholder:"Selecciona año",errorMessages:{missingDate:"Selecciona una fecha",missingField:e=>`Selecciona ${e}`,missingTwoFields:(e,r)=>`Selecciona ${e} y ${r}`,missingAllFields:"Selecciona todos los campos"}}}},S={render:e=>n(e,{title:"Hidden Labels",id:"hidden-labels"}),args:{hideLabels:!0}},y={render:e=>n(e,{title:"Required Fields",description:"All inputs are required when isRequired is true.",id:"required-fields"}),args:{isRequired:!0}},x={render:e=>n(e,{title:"Reverse Years",id:"reverse-years"}),args:{reverseYears:!0}},f={render:e=>n(e,{title:"Smart Date Correction",description:"Try selecting Jan 31, then switch month to February.",id:"smart-correction",containerStyle:{maxWidth:"440px"}})},D={render:e=>n(e,{title:"Range Limits",description:"Range: 2020-01-01 to 2025-12-31",id:"range-limits",containerStyle:{maxWidth:"460px"},minDateFallback:new Date(2020,0,1),maxDateFallback:new Date(2025,11,31)})},E={render:e=>n(e,{title:"Invalid Order Fallback",description:"Passing an invalid order falls back to month/day/year.",id:"invalid-order",containerStyle:{maxWidth:"420px"}}),args:{order:"month-year-day"}},w={render:e=>n(e,{title:"Theming Overrides (CSS Vars)",description:"These styles are applied via CSS custom properties on the root element.",id:"theme-overrides",containerStyle:{maxWidth:"880px"},classNameOverride:"rsd-theme-aurora",extraContent:[a.createElement("style",null,`.rsd-theme-aurora {
            --rsd-gap: 14px;
            --rsd-legend-font-size: 18px;
            --rsd-legend-font-weight: 700;
            --rsd-error-color: #dc2626;
            --rsd-select-padding: 12px 14px;
            --rsd-select-border: 1px solid rgba(15, 23, 42, 0.15);
            --rsd-select-border-radius: 14px;
            --rsd-select-font-size: 15px;
            --rsd-select-font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
            --rsd-select-hover-border: rgba(37, 99, 235, 0.55);
            --rsd-select-focus-border: #2563eb;
            --rsd-select-focus-ring: 0 0 0 4px rgba(37, 99, 235, 0.2);
            --rsd-select-disabled-bg: rgba(15, 23, 42, 0.06);
            --rsd-select-disabled-color: rgba(15, 23, 42, 0.45);
            --rsd-required-color: #16a34a;

            background: linear-gradient(135deg, rgba(14, 116, 144, 0.08), rgba(59, 130, 246, 0.06)),
              radial-gradient(circle at top right, rgba(16, 185, 129, 0.18), transparent 55%);
            padding: 22px 24px;
            border-radius: 20px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          }

          .rsd-theme-aurora .rsd__legend {
            color: #0f172a;
            letter-spacing: 0.02em;
          }

          .rsd-theme-aurora .rsd__select {
            background: rgba(255, 255, 255, 0.85);
            color: #0f172a;
            font-weight: 600;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .rsd-theme-aurora .rsd__select-row {
            flex-wrap: nowrap;
            gap: 16px;
          }

          .rsd-theme-aurora .rsd__label {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 12px;
            color: rgba(15, 23, 42, 0.6);
          }

          .rsd-theme-aurora .rsd__error-message {
            background: rgba(248, 113, 113, 0.12);
            padding: 10px 12px;
            border-radius: 12px;
            font-weight: 600;
          }`)]})},Y=()=>{throw new Error("Intentional render error")},v={render:e=>o.jsxs("div",{style:{padding:"20px",maxWidth:"480px"},children:[o.jsx("h3",{children:"Error Boundary"}),o.jsx("p",{style:{marginBottom:"12px"},children:"This example intentionally throws to demonstrate the fallback UI."}),o.jsx(A,{renderFallback:r=>o.jsxs("div",{role:"alert",style:{padding:"12px",borderRadius:"8px",background:"#fff1f2",color:"#9f1239"},children:["Error: ",r.message]}),children:o.jsx(Y,{})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => renderWithSharedState(args)
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => renderWithSharedState(args, {
    title: 'With Date Range',
    description: 'Allowed range: Jan 1, 2023 – Dec 31, 2025',
    minDateFallback: new Date(2023, 0, 1),
    maxDateFallback: new Date(2025, 11, 31)
  })
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => {
    const spanishMonths = {
      1: 'Enero',
      2: 'Febrero',
      3: 'Marzo',
      4: 'Abril',
      5: 'Mayo',
      6: 'Junio',
      7: 'Julio',
      8: 'Agosto',
      9: 'Septiembre',
      10: 'Octubre',
      11: 'Noviembre',
      12: 'Diciembre'
    } as const;
    return renderWithSharedState(args, {
      title: 'Custom Labels + Months (Spanish)',
      mapLabels: labels => ({
        groupLabel: 'Selecciona tu fecha de viaje',
        yearLabel: 'Año',
        monthLabel: 'Mes',
        dayLabel: 'Día',
        yearPlaceholder: 'Selecciona año',
        monthPlaceholder: 'Selecciona mes',
        dayPlaceholder: 'Selecciona día',
        months: spanishMonths,
        ...labels
      }),
      extraContent: [React.createElement('div', {
        style: {
          marginTop: '10px',
          color: '#555',
          fontSize: '13px'
        }
      }, Object.values(spanishMonths).join(' · '))]
    });
  },
  args: {
    order: 'day/month/year'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => renderWithSharedState(args, {
    title: 'Different Order (Day/Month/Year)'
  }),
  args: {
    order: 'day/month/year'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => {
    const selectedDate = new Date();
    const {
      minDate,
      maxDate,
      ...rest
    } = args as any;
    return React.createElement('div', {
      style: baseContainerStyle
    }, withKeys([React.createElement('h3', null, 'Disabled State'), React.createElement(SelectDatepicker, {
      ...rest,
      selectedDate,
      onDateChange: () => {},
      onChange: () => {},
      minDate: resolveOptionalDateArg(minDate),
      maxDate: resolveOptionalDateArg(maxDate)
    }), renderSelectedDate(selectedDate)]));
  },
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => renderWithSharedState(args, {
    title: 'Error State',
    id: 'error-state'
  }),
  args: {
    hasError: true
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => renderWithSharedState(args, {
    title: 'Custom Error Messages',
    description: 'Error messaging can be localized via labels.errorMessages.',
    id: 'custom-error-messages'
  }),
  args: {
    hasError: true,
    labels: {
      groupLabel: 'Selecciona tu fecha',
      monthLabel: 'Mes',
      dayLabel: 'Día',
      yearLabel: 'Año',
      monthPlaceholder: 'Selecciona mes',
      dayPlaceholder: 'Selecciona día',
      yearPlaceholder: 'Selecciona año',
      errorMessages: {
        missingDate: 'Selecciona una fecha',
        missingField: (field: string) => \`Selecciona \${field}\`,
        missingTwoFields: (first: string, second: string) => \`Selecciona \${first} y \${second}\`,
        missingAllFields: 'Selecciona todos los campos'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => renderWithSharedState(args, {
    title: 'Hidden Labels',
    id: 'hidden-labels'
  }),
  args: {
    hideLabels: true
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => renderWithSharedState(args, {
    title: 'Required Fields',
    description: 'All inputs are required when isRequired is true.',
    id: 'required-fields'
  }),
  args: {
    isRequired: true
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => renderWithSharedState(args, {
    title: 'Reverse Years',
    id: 'reverse-years'
  }),
  args: {
    reverseYears: true
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => renderWithSharedState(args, {
    title: 'Smart Date Correction',
    description: 'Try selecting Jan 31, then switch month to February.',
    id: 'smart-correction',
    containerStyle: {
      maxWidth: '440px'
    }
  })
}`,...f.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => renderWithSharedState(args, {
    title: 'Range Limits',
    description: 'Range: 2020-01-01 to 2025-12-31',
    id: 'range-limits',
    containerStyle: {
      maxWidth: '460px'
    },
    minDateFallback: new Date(2020, 0, 1),
    maxDateFallback: new Date(2025, 11, 31)
  })
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => renderWithSharedState(args, {
    title: 'Invalid Order Fallback',
    description: 'Passing an invalid order falls back to month/day/year.',
    id: 'invalid-order',
    containerStyle: {
      maxWidth: '420px'
    }
  }),
  args: {
    order: 'month-year-day' as unknown as SelectDatepickerOrder
  }
}`,...E.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (args: StoryArgs) => renderWithSharedState(args, {
    title: 'Theming Overrides (CSS Vars)',
    description: 'These styles are applied via CSS custom properties on the root element.',
    id: 'theme-overrides',
    containerStyle: {
      maxWidth: '880px'
    },
    classNameOverride: 'rsd-theme-aurora',
    extraContent: [React.createElement('style', null, \`.rsd-theme-aurora {
            --rsd-gap: 14px;
            --rsd-legend-font-size: 18px;
            --rsd-legend-font-weight: 700;
            --rsd-error-color: #dc2626;
            --rsd-select-padding: 12px 14px;
            --rsd-select-border: 1px solid rgba(15, 23, 42, 0.15);
            --rsd-select-border-radius: 14px;
            --rsd-select-font-size: 15px;
            --rsd-select-font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
            --rsd-select-hover-border: rgba(37, 99, 235, 0.55);
            --rsd-select-focus-border: #2563eb;
            --rsd-select-focus-ring: 0 0 0 4px rgba(37, 99, 235, 0.2);
            --rsd-select-disabled-bg: rgba(15, 23, 42, 0.06);
            --rsd-select-disabled-color: rgba(15, 23, 42, 0.45);
            --rsd-required-color: #16a34a;

            background: linear-gradient(135deg, rgba(14, 116, 144, 0.08), rgba(59, 130, 246, 0.06)),
              radial-gradient(circle at top right, rgba(16, 185, 129, 0.18), transparent 55%);
            padding: 22px 24px;
            border-radius: 20px;
            border: 1px solid rgba(59, 130, 246, 0.2);
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          }

          .rsd-theme-aurora .rsd__legend {
            color: #0f172a;
            letter-spacing: 0.02em;
          }

          .rsd-theme-aurora .rsd__select {
            background: rgba(255, 255, 255, 0.85);
            color: #0f172a;
            font-weight: 600;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
          }

          .rsd-theme-aurora .rsd__select-row {
            flex-wrap: nowrap;
            gap: 16px;
          }

          .rsd-theme-aurora .rsd__label {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 12px;
            color: rgba(15, 23, 42, 0.6);
          }

          .rsd-theme-aurora .rsd__error-message {
            background: rgba(248, 113, 113, 0.12);
            padding: 10px 12px;
            border-radius: 12px;
            font-weight: 600;
          }\`)]
  })
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (_args: StoryArgs) => {
    return <div style={{
      padding: '20px',
      maxWidth: '480px'
    }}>\r
        <h3>Error Boundary</h3>\r
        <p style={{
        marginBottom: '12px'
      }}>\r
          This example intentionally throws to demonstrate the fallback UI.\r
        </p>\r
        <SelectDatepickerErrorBoundary renderFallback={error => <div role="alert" style={{
        padding: '12px',
        borderRadius: '8px',
        background: '#fff1f2',
        color: '#9f1239'
      }}>\r
              Error: {error.message}\r
            </div>}>\r
          <CrashOnRender />\r
        </SelectDatepickerErrorBoundary>\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const K=["Default","WithDateRange","WithCustomLabels","DifferentOrder","Disabled","WithErrorState","WithCustomErrorMessages","WithHiddenLabels","RequiredFields","WithReverseYears","WithSmartDateCorrection","WithRangeLimits","WithInvalidOrderFallback","WithThemingOverrides","WithErrorBoundary"];export{c as Default,g as DifferentOrder,h as Disabled,y as RequiredFields,b as WithCustomErrorMessages,p as WithCustomLabels,m as WithDateRange,v as WithErrorBoundary,u as WithErrorState,S as WithHiddenLabels,E as WithInvalidOrderFallback,D as WithRangeLimits,x as WithReverseYears,f as WithSmartDateCorrection,w as WithThemingOverrides,K as __namedExportsOrder,V as default};

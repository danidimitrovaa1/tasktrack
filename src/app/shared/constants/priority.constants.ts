import { Priority } from '../../models/task.model';

export const PRIORITY_DROPDOWN_OPTIONS = [
  {
    id: Priority.Low,
    label: 'Low Priority',
    stylesClass:
      'block flex flex-row gap-2 w-fit px-5 py-2 text-left cursor-pointer rounded-full bg-[#EEFBF3] text-[#56C250] font-medium text-left',
    selectedStylesClass: 'w-fit text-left cursor-pointer text-[#56C250] font-medium text-left',
    iconStylesClass: 'text-[#56C250]',
  },
  {
    id: Priority.Medium,
    label: 'Medium Priority',
    stylesClass:
      'block flex flex-row gap-2 w-fit px-5 py-2 text-left cursor-pointer rounded-full bg-[#FEF3EA] text-[#FF7034] font-medium text-left',
    selectedStylesClass: 'w-fit text-left cursor-pointer text-[#FF7034] font-medium text-left',
    iconStylesClass: 'text-[#FF7034]',
  },
  {
    id: Priority.High,
    label: 'High Priority',
    stylesClass:
      'block flex flex-row gap-2 w-fit px-5 py-2 text-left cursor-pointer rounded-full bg-[#FDEFEE] text-[#E60023] font-medium text-left',
    selectedStylesClass: 'w-fit text-left cursor-pointer text-[#E60023] font-medium text-left',
    iconStylesClass: 'text-[#E60023]',
  },
];

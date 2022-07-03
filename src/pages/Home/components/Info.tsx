import { PurpleBackground } from 'components'
import { Logo } from 'components/svgs'

function Info() {
  return (
    <div className='h-[768px] flex items-end'>
      <div className='bg-yellow pt-48 rounded-xl w-[682px] h-[611px] relative flex justify-center'>
        <p className='w-[535px] text-justify  h-[377px] overflow-y-scroll'>
          იაკებს, გამრავლების სეზონი როგორც წესი ივლისიდან სექტემბრამდე აქვთ.
          ორსულობა კი დაახლოებით 270 დღე გრძელდება. მაისიდან ივნისამდე იბადებიან
          პატარები, ძირითადად ერთი ხბო. მდედრი მშობიარობისთვის იზოლირებულ
          ტერიტორიას პოულობს, სადაც პატარას აჩენს. ხბო დაახლოებით 10 წუთში უკვე
          მყარად დგას ფეხზე და წყვილი მალევე უბრუნდება ჯოგს. <br /> <br />
          გარეული და შინაური იაკებიც წელიწადში ერთხელ მშბიარობენ, კარგი გარემო
          პირობების და საკმაო რაოდენობის საკვების ქონის შემთხვევაში, შესაძლოა
          უფრო სწრაფი გამრავლებაც. ხბოები ერთი წლის ასაკში ანებებენ რძის ჭამას
          თავს და ხდებიან დამოუკიდებლები. <br />
          <br /> ველური იაკის ნაშიერები, ყავისფერი შეფერილობისანი არიან და
          მხოლოდ მოზრდილ ასაკში უმუქდებათ და უგრძელდებათ ბეწვი. მდედრები როგორც
          წესი 3-4 წლის ასაკში აჩენენ პირველად, თუმცა 6 წელი მათი განვითარების
          პიკია. <br />
          <br />
          ტყვეობაში დაახლოებით 25 წელი შეუძლიათ სიცოცხლე, ბუნებაში ეს ასაკი
          რთული მისაღწევია. საინტერესოა, რომ ხანდახან გარეულები სრულიად უმიზეზოდ
          ესხმიან თავს მოშინაურებულ იაკებს, თუმცა ადამიანის დანახვისთანავე
          გარბიან, ზოგადად მათთან კონტაქტს ერიდებიან.
        </p>

        <div className='absolute w-[313px] top-[-25%] left-[28%] drop-shadow-4xl border-white border-2 overflow-hidden h-[313px] rounded-full flex justify-center items-center'>
          <PurpleBackground styles='fixed -z-50 w-[313px]  h-[313px] rounded-full' />
          <Logo styles='w-[27-px] h-32' />
        </div>

        <PurpleBackground styles='absolute w-4 h-4 rounded-full top-6 left-6' />
        <PurpleBackground styles='absolute w-4 h-4 rounded-full top-6 right-6' />
      </div>
    </div>
  )
}

export default Info

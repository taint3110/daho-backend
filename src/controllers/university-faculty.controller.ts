import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {University, Faculty} from '../models';
import {UniversityRepository} from '../repositories';

export class UniversityFacultyController {
  constructor(
    @repository(UniversityRepository)
    protected universityRepository: UniversityRepository,
  ) {}

  @get('/universities/{id}/faculties', {
    responses: {
      '200': {
        description: 'Array of University has many Faculty',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Faculty)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: string,
    @param.query.object('filter') filter?: Filter<Faculty>,
  ): Promise<Faculty[]> {
    return this.universityRepository.faculties(id).find(filter);
  }

  @post('/universities/{id}/faculties', {
    responses: {
      '200': {
        description: 'University model instance',
        content: {'application/json': {schema: getModelSchemaRef(Faculty)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof University.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Faculty, {
            title: 'NewFacultyInUniversity',
            exclude: ['fal_id'],
            optional: ['universityId'],
          }),
        },
      },
    })
    faculty: Omit<Faculty, 'fal_id'>,
  ): Promise<Faculty> {
    const faculties = [
      {
        fal_id: 1,
        universityId: '6645abd332ef462c3afc178b',
        name: 'Khoa Cơ khí',
        code: 'cokhi',
      },
      {
        fal_id: 2,
        universityId: '6645abd332ef462c3afc178b',
        name: 'Khoa Công nghệ Vật liệu',
        code: 'congnghevatlieu',
      },
      {
        fal_id: 3,
        universityId: '6645abd332ef462c3afc178b',
        name: 'Khoa Điện - Điện tử',
        code: 'diendientu',
      },
      {
        fal_id: 4,
        universityId: '6645abd332ef462c3afc178b',
        name: 'Khoa Khoa học Ứng dụng',
        code: 'khoahocungdung',
      },
      {
        fal_id: 5,
        universityId: '6645abd332ef462c3afc178b',
        name: 'Khoa Khoa học và Kỹ thuật Máy tính',
        code: 'khoahocvakythuatmaytinh',
      },
      {
        fal_id: 6,
        universityId: '6645abd332ef462c3afc178b',
        name: 'Khoa Kỹ thuật Địa chất và Dầu khí',
        code: 'kythuatdiachatvadaukhi',
      },
      {
        fal_id: 7,
        universityId: '6645abd332ef462c3afc178b',
        name: 'Khoa Kỹ thuật Giao thông',
        code: 'kythuatgiaothong',
      },
      {
        fal_id: 8,
        universityId: '6645abd332ef462c3afc178b',
        name: 'Khoa Kỹ thuật Hóa học',
        code: 'kythuathoahoc',
      },
      {
        fal_id: 9,
        universityId: '6645abd332ef462c3afc178b',
        name: 'Khoa Kỹ thuật Xây dựng',
        code: 'kythuatxaydung',
      },
      {
        fal_id: 10,
        universityId: '6645abd332ef462c3afc178b',
        name: 'Khoa Môi trường và Tài nguyên',
        code: 'moitruongvatainguyen',
      },
      {
        fal_id: 11,
        universityId: '6645abd332ef462c3afc178b',
        name: 'Khoa Quản lý Công nghiệp',
        code: 'quanlycongnghiep',
      },
      {
        fal_id: 12,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Công nghệ thông tin',
        code: 'congnghethongtin',
      },
      {
        fal_id: 13,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Toán – Tin học',
        code: 'toantinhoc',
      },
      {
        fal_id: 14,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Vật lý – Vật lý Kỹ thuật',
        code: 'vatlyvatlykythuat',
      },
      {
        fal_id: 15,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Hóa học',
        code: 'hoahoc',
      },
      {
        fal_id: 16,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Sinh học & Công nghệ Sinh học',
        code: 'sinhhoccongnghesinhoc',
      },
      {
        fal_id: 17,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Môi trường',
        code: 'moitruong',
      },
      {
        fal_id: 18,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Khoa học và Công nghệ vật liệu',
        code: 'khoahocvacongnghieuvatlieu',
      },
      {
        fal_id: 19,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Địa chất',
        code: 'diachat',
      },
      {
        fal_id: 20,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Điện tử Viễn thông',
        code: 'dientuviensong',
      },
      {
        fal_id: 21,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Báo chí và truyền thông',
        code: 'baochivatruyenthong',
      },
      {
        fal_id: 22,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Ngữ văn Anh',
        code: 'nguvananh',
      },
      {
        fal_id: 23,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Ngữ văn Nga',
        code: 'nguvannga',
      },
      {
        fal_id: 24,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Ngữ văn Pháp',
        code: 'nguvanphap',
      },
      {
        fal_id: 25,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Ngữ văn Trung Quốc',
        code: 'nguvantrungquoc',
      },
      {
        fal_id: 26,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Ngữ văn Đức',
        code: 'nguvanduc',
      },
      {
        fal_id: 27,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Hàn Quốc học',
        code: 'hanquochoc',
      },
      {
        fal_id: 28,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Nhật Bản học',
        code: 'nhatbanhoc',
      },
      {
        fal_id: 29,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Văn hóa học',
        code: 'vanhoahoc',
      },
      {
        fal_id: 30,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Nhân học',
        code: 'nhanhoc',
      },
      {
        fal_id: 31,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Triết học',
        code: 'triethoc',
      },
      {
        fal_id: 32,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Lịch sử',
        code: 'lichsu',
      },
      {
        fal_id: 33,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Văn học',
        code: 'vanhoc',
      },
      {
        fal_id: 34,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Giáo dục',
        code: 'giaoduc',
      },
      {
        fal_id: 35,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Xã hội học',
        code: 'xahoihoc',
      },
      {
        fal_id: 36,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Quan hệ quốc tế',
        code: 'quanhequocte',
      },
      {
        fal_id: 37,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Thư viện - Thông tin học',
        code: 'thuvienthongtinhoc',
      },
      {
        fal_id: 38,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Ngôn ngữ học',
        code: 'ngonnguhoc',
      },
      {
        fal_id: 39,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Việt Nam học',
        code: 'vietnamhoc',
      },
      {
        fal_id: 40,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Đông phương học',
        code: 'dongphuonghoc',
      },
      {
        fal_id: 41,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Công tác xã hội',
        code: 'congtacxahoi',
      },
      {
        fal_id: 42,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Đô thị học',
        code: 'dothihoc',
      },
      {
        fal_id: 43,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Du lịch',
        code: 'dulich',
      },
      {
        fal_id: 44,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Tâm lý học',
        code: 'tamlyhoc',
      },
      {
        fal_id: 45,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Giáo dục',
        code: 'giaoduc',
      },
      {
        fal_id: 46,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Lưu trữ học và quản trị văn phòng',
        code: 'luutruhovaquantrivanphong',
      },
      {
        fal_id: 47,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Địa lý',
        code: 'dialy',
      },
      {
        fal_id: 48,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Ngữ văn Tây Ban Nha - Italia',
        code: 'nguvantaybanhaitalia',
      },
      {
        fal_id: 49,
        universityId: '6645ac2d3ea3ba693bc3ec26',
        name: 'Khoa Khoa học liên ngành',
        code: 'khoahoclienganh',
      },
      {
        fal_id: 50,
        universityId: '6645ac2d3ea3ba693bc3ec27',
        name: 'Khoa Quản trị Kinh doanh',
        code: 'quantrikinhdoanh',
      },
      {
        fal_id: 51,
        universityId: '6645ac2d3ea3ba693bc3ec27',
        name: 'Khoa Kinh tế, Tài chính và Kế toán',
        code: 'kinhtetaichinhvakteoan',
      },
      {
        fal_id: 52,
        universityId: '6645ac2d3ea3ba693bc3ec27',
        name: 'Khoa Công nghệ Thông tin',
        code: 'congnghethongtin',
      },
      {
        fal_id: 53,
        universityId: '6645ac2d3ea3ba693bc3ec27',
        name: 'Khoa Điện tử Viễn thông',
        code: 'dientuviensong',
      },
      {
        fal_id: 54,
        universityId: '6645ac2d3ea3ba693bc3ec27',
        name: 'Khoa Công nghệ Sinh học',
        code: 'congnghesinhoc',
      },
      {
        fal_id: 55,
        universityId: '6645ac2d3ea3ba693bc3ec27',
        name: 'Khoa Kỹ thuật Y sinh',
        code: 'kythuatysinh',
      },
      {
        fal_id: 56,
        universityId: '6645ac2d3ea3ba693bc3ec27',
        name: 'Khoa Kỹ thuật và Quản lý Công nghiệp',
        code: 'kythuatvaquanlycongnghiep',
      },
      {
        fal_id: 57,
        universityId: '6645ac2d3ea3ba693bc3ec27',
        name: 'Khoa Kỹ thuật Hóa học và Môi trường',
        code: 'kythuathoahocvamoitruong',
      },
      {
        fal_id: 58,
        universityId: '6645ac2d3ea3ba693bc3ec27',
        name: 'Khoa Kỹ thuật và Quản lý Xây dựng',
        code: 'kythuatvaquanlyxaydung',
      },
      {
        fal_id: 59,
        universityId: '6645ac2d3ea3ba693bc3ec27',
        name: 'Khoa Ngôn ngữ',
        code: 'ngonngu',
      },
      {
        fal_id: 60,
        universityId: '6645ac2d3ea3ba693bc3ec28',
        name: 'Khoa Khoa học máy tính',
        code: 'khoahocmaytinh',
      },
      {
        fal_id: 61,
        universityId: '6645ac2d3ea3ba693bc3ec28',
        name: 'Khoa Công nghệ phần mềm',
        code: 'congnghephanmem',
      },
      {
        fal_id: 62,
        universityId: '6645ac2d3ea3ba693bc3ec28',
        name: 'Khoa Kỹ thuật máy tính',
        code: 'kythuatmaytinh',
      },
      {
        fal_id: 63,
        universityId: '6645ac2d3ea3ba693bc3ec28',
        name: 'Khoa Hệ thống thông tin',
        code: 'hethongthongtin',
      },
      {
        fal_id: 64,
        universityId: '6645ac2d3ea3ba693bc3ec28',
        name: 'Khoa Mạng máy tính và truyền thông',
        code: 'mangmaytinhvatruyenthong',
      },
      {
        fal_id: 65,
        universityId: '6645ac2d3ea3ba693bc3ec28',
        name: 'Khoa Khoa học và Kỹ thuật Thông tin',
        code: 'khoahocvakythuatthongtin',
      },
      {
        fal_id: 66,
        universityId: '6645ac2d3ea3ba693bc3ec29',
        name: 'Khoa Kinh tế',
        code: 'kinhte',
      },
      {
        fal_id: 67,
        universityId: '6645ac2d3ea3ba693bc3ec29',
        name: 'Khoa Kinh tế đối ngoại',
        code: 'kinhtedoingoai',
      },
      {
        fal_id: 68,
        universityId: '6645ac2d3ea3ba693bc3ec29',
        name: 'Khoa Tài chính – Ngân hàng',
        code: 'taichinhnganhang',
      },
      {
        fal_id: 69,
        universityId: '6645ac2d3ea3ba693bc3ec29',
        name: 'Khoa Kế toán - Kiểm toán',
        code: 'ketoankiemtoan',
      },
      {
        fal_id: 70,
        universityId: '6645ac2d3ea3ba693bc3ec29',
        name: 'Khoa Quản trị kinh doanh',
        code: 'quantrikinhdoanh2',
      },
      {
        fal_id: 71,
        universityId: '6645ac2d3ea3ba693bc3ec29',
        name: 'Khoa Hệ thống thông tin',
        code: 'hethongthongtin2',
      },
      {
        fal_id: 72,
        universityId: '6645ac2d3ea3ba693bc3ec29',
        name: 'Khoa Toán kinh tế',
        code: 'toankinhte',
      },
      {
        fal_id: 73,
        universityId: '6645ac2d3ea3ba693bc3ec29',
        name: 'Khoa Luật',
        code: 'luat',
      },
      {
        fal_id: 74,
        universityId: '6645ac2d3ea3ba693bc3ec29',
        name: 'Khoa Luật kinh tế',
        code: 'luatkinhte',
      },
    ];
    faculties.forEach(faculty => {
      return this.universityRepository
        .faculties(String(faculty.universityId))
        .create({...faculty, fal_id: String(faculty.fal_id)});
    });
    return this.universityRepository.faculties(id).create(faculty);
  }

  @patch('/universities/{id}/faculties', {
    responses: {
      '200': {
        description: 'University.Faculty PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Faculty, {partial: true}),
        },
      },
    })
    faculty: Partial<Faculty>,
    @param.query.object('where', getWhereSchemaFor(Faculty))
    where?: Where<Faculty>,
  ): Promise<Count> {
    return this.universityRepository.faculties(id).patch(faculty, where);
  }

  @del('/universities/{id}/faculties', {
    responses: {
      '200': {
        description: 'University.Faculty DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Faculty))
    where?: Where<Faculty>,
  ): Promise<Count> {
    return this.universityRepository.faculties(id).delete(where);
  }
}

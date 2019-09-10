<template>
  <div id="pageId">
    <!---Component CRUD-->
    <crud :crud-data="import('@imagina/qticket/_crud/tickets')"/>
    <!-- <div class="relative-position q-mb-lg backend-page">

      <div class="box">
        <div class="row gutter-x-sm">

          <div class="col-12 col-md-8" >

            adsdadadadad

          </div>

        </div>
      </div>
    </div> -->

  </div>
</template>
<script>
//Plugins
import {required} from 'vuelidate/lib/validators'
import {gmaps} from '@imagina/qplace/_plugins/gmaps'
//Components
import locales from '@imagina/qsite/_components/locales'
import mediaForm from '@imagina/qmedia/_components/form'
import recursiveList from 'src/components/master/recursiveListSelect'
import schedulesForm from 'src/components/master/schedules'
  export default {
    props: {},
    components: {locales, mediaForm, recursiveList, schedulesForm},
    watch: {},
    validations() {
      return {}
    },
    mounted() {
      this.$nextTick(function () {
        //console.log(this.locale.fields.userId);
      })
    },
    data() {
      return {
        loading: {
          page: false
        },
        configName: 'apiRoutes.qticket.tickets',
        itemId: false,
        locale: {
          fields: {
            id: '',
            status: 0
          },
          fieldsTranslatable: {
            name: '',
            description: ''
          },
          validations: {
            name: {required}
          }
        },
        editorText: {
          toolbar: [
            ['bold', 'italic', 'strike', 'underline', 'removeFormat'],
            ['link'],
            [
              {
                label: 'Font Size',
                icon: 'format_size',
                fixedLabel: true,
                fixedIcon: true,
                list: 'no-icons',
                options: ['size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7']
              }
            ],
            ['quote', 'unordered', 'ordered'],
            ['fullscreen']
          ]
        },
        buttonActions: {}
      }
    },
    methods: {}
  }
</script>
<style lang="stylus">
  @import "~variables";
</style>

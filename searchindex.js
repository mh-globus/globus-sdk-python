Search.setIndex({envversion:47,filenames:["authorization","clients","clients/auth","clients/base","clients/transfer","config","deprecations","examples","examples/authorization","examples/client_credentials","examples/native_app","examples/three_legged_oauth","exceptions","index","installation","oauth","oauth/flows","oauth/resource_servers","optional_dependencies","responses","tutorial"],objects:{"globus_sdk.AccessTokenAuthorizer":{set_authorization_header:[0,1,1,""]},"globus_sdk.AuthClient":{get_identities:[2,1,1,""],oauth2_exchange_code_for_tokens:[2,1,1,""],oauth2_get_authorize_url:[2,1,1,""],oauth2_refresh_token:[2,1,1,""],oauth2_revoke_token:[2,1,1,""],oauth2_token:[2,1,1,""],oauth2_userinfo:[2,1,1,""]},"globus_sdk.BasicAuthorizer":{set_authorization_header:[0,1,1,""]},"globus_sdk.ConfidentialAppAuthClient":{oauth2_client_credentials_tokens:[2,1,1,""],oauth2_get_dependent_tokens:[2,1,1,""],oauth2_start_flow:[2,1,1,""],oauth2_start_flow_authorization_code:[2,1,1,""],oauth2_token_introspect:[2,1,1,""]},"globus_sdk.DeleteData":{add_item:[4,1,1,""]},"globus_sdk.NativeAppAuthClient":{oauth2_refresh_token:[2,1,1,""],oauth2_start_flow:[2,1,1,""],oauth2_start_flow_native_app:[2,1,1,""]},"globus_sdk.NullAuthorizer":{set_authorization_header:[0,1,1,""]},"globus_sdk.RefreshTokenAuthorizer":{handle_missing_authorization:[0,1,1,""],set_authorization_header:[0,1,1,""]},"globus_sdk.TransferClient":{add_endpoint_acl_rule:[4,1,1,""],add_endpoint_role:[4,1,1,""],add_endpoint_server:[4,1,1,""],bookmark_list:[4,1,1,""],cancel_task:[4,1,1,""],create_bookmark:[4,1,1,""],create_endpoint:[4,1,1,""],create_shared_endpoint:[4,1,1,""],delete_bookmark:[4,1,1,""],delete_endpoint:[4,1,1,""],delete_endpoint_acl_rule:[4,1,1,""],delete_endpoint_role:[4,1,1,""],delete_endpoint_server:[4,1,1,""],endpoint_acl_list:[4,1,1,""],endpoint_activate:[4,1,1,""],endpoint_autoactivate:[4,1,1,""],endpoint_deactivate:[4,1,1,""],endpoint_get_activation_requirements:[4,1,1,""],endpoint_manager_monitored_endpoints:[4,1,1,""],endpoint_manager_task_list:[4,1,1,""],endpoint_role_list:[4,1,1,""],endpoint_search:[4,1,1,""],endpoint_server_list:[4,1,1,""],get_bookmark:[4,1,1,""],get_endpoint:[4,1,1,""],get_endpoint_acl_rule:[4,1,1,""],get_endpoint_role:[4,1,1,""],get_endpoint_server:[4,1,1,""],get_submission_id:[4,1,1,""],get_task:[4,1,1,""],my_effective_pause_rule_list:[4,1,1,""],my_shared_endpoint_list:[4,1,1,""],operation_ls:[4,1,1,""],operation_mkdir:[4,1,1,""],operation_rename:[4,1,1,""],submit_delete:[4,1,1,""],submit_transfer:[4,1,1,""],task_event_list:[4,1,1,""],task_list:[4,1,1,""],task_pause_info:[4,1,1,""],task_successful_transfers:[4,1,1,""],task_wait:[4,1,1,""],update_bookmark:[4,1,1,""],update_endpoint:[4,1,1,""],update_endpoint_acl_rule:[4,1,1,""],update_endpoint_server:[4,1,1,""],update_task:[4,1,1,""]},"globus_sdk.TransferData":{add_item:[4,1,1,""]},"globus_sdk.auth":{GlobusAuthorizationCodeFlowManager:[16,0,1,""],GlobusNativeAppFlowManager:[16,0,1,""]},"globus_sdk.auth.GlobusAuthorizationCodeFlowManager":{exchange_code_for_tokens:[16,1,1,""],get_authorize_url:[16,1,1,""]},"globus_sdk.auth.GlobusNativeAppFlowManager":{exchange_code_for_tokens:[16,1,1,""],get_authorize_url:[16,1,1,""]},"globus_sdk.auth.oauth_flow_manager":{GlobusOAuthFlowManager:[16,0,1,""]},"globus_sdk.auth.oauth_flow_manager.GlobusOAuthFlowManager":{exchange_code_for_tokens:[16,1,1,""],get_authorize_url:[16,1,1,""]},"globus_sdk.auth.token_response":{OAuthDependentTokenResponse:[19,0,1,""],OAuthTokenResponse:[19,0,1,""]},"globus_sdk.auth.token_response.OAuthDependentTokenResponse":{by_resource_server:[19,3,1,""]},"globus_sdk.auth.token_response.OAuthTokenResponse":{access_token:[19,3,1,""],by_resource_server:[19,3,1,""],decode_id_token:[19,1,1,""],expires_at_seconds:[19,3,1,""],expires_in:[19,3,1,""],other_tokens:[19,3,1,""],refresh_token:[19,3,1,""],resource_server:[19,3,1,""]},"globus_sdk.authorizers.base":{GlobusAuthorizer:[0,0,1,""]},"globus_sdk.authorizers.base.GlobusAuthorizer":{handle_missing_authorization:[0,1,1,""],set_authorization_header:[0,1,1,""]},"globus_sdk.base":{BaseClient:[3,0,1,""]},"globus_sdk.base.BaseClient":{"delete":[3,1,1,""],get:[3,1,1,""],post:[3,1,1,""],put:[3,1,1,""],set_app_name:[3,1,1,""]},"globus_sdk.exc":{GlobusAPIError:[12,0,1,""],GlobusConnectionError:[12,0,1,""],GlobusError:[12,0,1,""],GlobusTimeoutError:[12,0,1,""],NetworkError:[12,0,1,""],TransferAPIError:[4,0,1,""]},"globus_sdk.exc.GlobusAPIError":{raw_json:[12,3,1,""],raw_text:[12,3,1,""]},"globus_sdk.response":{GlobusHTTPResponse:[19,0,1,""],GlobusResponse:[19,0,1,""]},"globus_sdk.response.GlobusHTTPResponse":{text:[19,3,1,""]},"globus_sdk.response.GlobusResponse":{data:[19,3,1,""],get:[19,1,1,""]},"globus_sdk.transfer":{response:[19,2,0,"-"]},"globus_sdk.transfer.response":{ActivationRequirementsResponse:[19,0,1,""],IterableTransferResponse:[19,0,1,""],TransferResponse:[19,0,1,""]},"globus_sdk.transfer.response.ActivationRequirementsResponse":{active_until:[19,1,1,""],always_activated:[19,3,1,""],supports_auto_activation:[19,3,1,""],supports_web_activation:[19,3,1,""]},globus_sdk:{AccessTokenAuthorizer:[0,0,1,""],AuthClient:[2,0,1,""],BasicAuthorizer:[0,0,1,""],ConfidentialAppAuthClient:[2,0,1,""],DeleteData:[4,0,1,""],NativeAppAuthClient:[2,0,1,""],NullAuthorizer:[0,0,1,""],RefreshTokenAuthorizer:[0,0,1,""],TransferClient:[4,0,1,""],TransferData:[4,0,1,""],auth:[2,2,0,"-"],transfer:[4,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:attribute"},terms:{"11e5":2,"131bef46955c":2,"168edc3d":2,"18th":19,"45ee":2,"46bd0f56":2,"478c":2,"541ff5ebdc1c":2,"70c5":2,"7244fe7c8707":2,"7daddf46":2,"9cf8":2,"9f0f":2,"__builtins__":20,"__future__":19,"__main__":11,"__name__":11,"_default":[2,16],"_extern":11,"abstract":[0,16],"boolean":10,"case":[2,4,8,9,12,16,19,20],"catch":19,"class":[0,1,2,3,4,6],"default":[0,1,2,4,10,16,17,19],"final":20,"function":[2,7,11],"import":[0,1,2,4,8,9,10,11,12,15,19,20],"int":[0,4,12,19],"long":[2,8,9,10,16,19],"new":[0,2,4,8,9,10,17,20],"null":20,"public":1,"return":[0,2,3,4,11,12,16,19],"short":[0,2,9,10,11],"throw":12,"true":[0,3,4,10,11,16,19,20],"try":[0,3,4,12,19,20],"while":[2,4,8,12,17,18],a510:2,abbr:20,abc123:11,about:[2,4,12,20],abov:[8,9,10,20],absenc:[2,16],absolut:19,accept:20,access:[0,2,4],access_id:4,access_list:4,access_token:[0,2,9,10,11,19,20],accesstokenauthor:[0,2,8,9,11,20],accommod:2,account:20,acl:4,acquir:[2,11,19],act:[2,9,11,15,16,20],action:[0,3,11,15,19],activ:[2,4,11,19,20],activation_requir:4,activationrequirementsrespons:[4,19],active_until:19,activity_monitor:4,actual:[8,11,20],add:[0,3,4,10,11,20],add_endpoint_acl_rul:4,add_endpoint_rol:4,add_endpoint_serv:4,add_item:4,addit:[2,4,16,19],addition:[2,5,10],additional_param:[2,16],address:17,administr:20,advanc:[4,13],after:[2,4,9,10,16,20],afterward:0,against:[0,2,8,10,20],agent:3,agre:13,alia:19,all:[0,2,3,4,5,9,11,12,16,17,19,20],allow:[2,4,11,15,19],along:[9,11,16],alreadi:[0,4,11,14],alreadyactiv:4,also:[0,2,4,9,10,11,15,16,19,20],altern:[5,19],although:[15,19],alwai:[0,8],always_activ:19,amount:16,ani:[0,2,4,6,9,11,13,16],anoth:[4,9,17],anymor:20,anyth:[0,3],anywai:[4,16,19],apach:13,app:[2,3,4,7,9],app_client_id:11,app_client_secret:11,app_nam:3,appear:17,append:4,applic:[0,2,3,4,8,9,10,11,13,15,16,17,19,20],aqbx8yvvaaaaaaadxg:20,aqbx8yvvaaaaaaadxhatf46rxjcfuoxn1osomek:20,arbitrari:[4,16],aren:17,arg:[0,2,11,12,19],argument:[2,4,16,20],argv:6,around:3,arrai:[19,20],associ:16,assum:[11,20],attach:[0,19],attempt:[5,16,18],attribut:[16,19,20],auth:[0,1],auth_access_token:8,auth_author:8,auth_client:[0,8,16,19],auth_cod:[2,10,16,20],auth_refresh_token:8,auth_token:20,auth_uri:11,authclient:[0,2],authent:[0,1,2,7,8],authorize_url:[10,16,20],auto:[4,19],autoactiv:4,autoactivationfail:4,autom:9,automat:[0,4,8],auxiliari:20,avail:[2,4,5,13,19,20],awai:16,awar:4,awkward:8,back:[0,11,16,20],background:15,bake:8,bar:15,base64:0,base:[0,2,3,4,8,12,16,19],base_path:3,basecli:[0,2,3,4],basi:13,basic:[0,2,4],basicauthor:[0,2,8],bear:3,bearer:[0,2,20],becaus:[2,4,16],been:[2,9,10],befor:[19,20],beforehand:11,behalf:[2,9,11,15],behavior:[6,10,19],belong:[9,11,15,17],below:[2,4],best:12,beta:5,better:[4,17,19,20],between:[4,12],beyond:11,bin:11,blank:20,bleed:14,bodi:[2,3,12],bookmark:4,bookmark_data:4,bookmark_id:4,bookmark_list:4,bool:[3,16,19],bootstrap:20,both:[11,19],box:20,brief:17,browser:[4,16],build:11,built:4,bunch:20,bundl:16,burden:20,by_resource_serv:[2,9,10,11,17,19,20],c6ba:2,cach:4,cachedcredenti:4,call:[0,1,2,4,8,10,11,12,15,16,19,20],callabl:0,can:[0,2,4,5,8,9,10,11,12,14,16,17,19,20],cancel:4,cancel_task:4,cannot:[0,2,12,16,19],canon:5,canonical_nam:4,cap:4,capabl:0,captur:12,care:0,carri:[9,10,15],certain:18,cfg:5,check:[0,2,4,12,14,19,20],checkbox:[9,11],checksum:4,chicago:13,cid1001:2,clariti:4,clean:[11,16],clear:11,cli:[2,5],click:[9,11,20],client:0,client_id:[0,2,8,9,10,11,20],client_secret:[0,2,8,9,11],client_typ:2,clone:14,closer:20,code:[2,4,9,10,11,12,13,16,19,20],collect:[10,20],com:[13,14,15,17,20],combin:[15,16],come:[0,11,20],comma:2,common:[2,4,13,19],commonli:2,commun:[2,12],compat:4,complet:[4,9,10,11,16,19,20],complex:[0,8,15],complianc:13,compliant:2,compon:0,condit:[12,13,20],conf:11,confidenti:2,confidentialappauthcli:[2,8,9,11,16],config:1,confirm:2,conform:18,confus:17,connect:[2,12,17,18,19],consent:16,consid:[4,16,17],consist:17,constraint:16,construct:4,constructor:2,consum:16,contact:4,contain:[2,7,16,20],contend:8,content:4,content_typ:19,context:9,continu:20,control:17,conveni:[4,13,19],copi:[10,13,16],copyright:13,correct:12,correctli:20,correspond:17,could:[1,2,4,11],coupl:[8,11,20],cours:[2,12,16],courtesi:3,cousin:20,cover:15,creat:[0,4,5,8,9,11,20],create_bookmark:4,create_endpoint:4,create_result:4,create_shared_endpoint:4,credenti:[1,2,4,7,8],cron:[9,20],current:[0,4,5,9,11],custom:[9,10,19],dai:[9,20],data:[2,3,4,17,19,20],data_typ:4,databas:20,dataset1:4,date:0,ddata:4,deactiv:4,debug:3,decid:4,decod:18,decode_id_token:[18,19],deeper:20,def:11,default_response_class:3,defin:[0,16,20],definit:[9,10,11,16,20],defintiion:11,delet:[1,2,3,4,13],delete_bookmark:4,delete_endpoint:4,delete_endpoint_acl_rul:4,delete_endpoint_rol:4,delete_endpoint_serv:4,delete_item:4,delete_result:4,deletedata:4,delic:20,delimit:2,depend:[0,2,4,9,13,14],deprec:2,deprecationwarn:6,depth:20,describ:4,descript:[4,11,17],design:16,desir:[2,11,19],dest:4,destination_endpoint:4,destination_endpoint_id:4,destination_path:4,destroi:11,detail:[2,4,11,12,19,20],detect:2,develop:[3,5,9,10,11,12,20],dict:[0,2,3,4,12,16,19],dictionari:[4,19],did:20,didn:[4,20],differ:[2,8,17],dig:20,dir:4,direct:[4,16,19],directli:[2,3,4,8,9,10,11,19],directori:4,displai:[12,16],display_nam:[4,9,11,12,20],distinct:[8,17],distinguish:[2,12],distribut:13,dive:20,django:[11,16],doc:[13,19],document:[0,2,4,9,10,11,13,15,19],doe:[2,3,9,11],doesn:[4,8,16],don:[8,17,20],done:[0,4,19],dot:4,downstream:2,dramat:2,dropdown:20,dualiti:8,dure:[9,11],e24f:2,each:[1,2,7,8,20],easi:20,easili:11,edg:14,edu:4,effect:[2,4],either:[2,3,4,11,13,16],element:[4,15],elif:4,els:[4,11,12],email:[2,9,11,16,17,20],emb:16,embed:16,encod:[0,2,3,11,16],encourag:3,encrypt_data:4,end:[2,4,9,10,11,12],endpoint:[1,2,4,9,11,19,20],endpoint_acl_list:4,endpoint_activ:4,endpoint_autoactiv:4,endpoint_deactiv:4,endpoint_get_activation_requir:[4,19],endpoint_id:[4,19],endpoint_manag:4,endpoint_manager_monitored_endpoint:4,endpoint_manager_task_list:4,endpoint_role_list:4,endpoint_search:[4,9,11,12,20],endpoint_server_list:4,enforc:20,enough:[9,19,20],ensur:0,enter:[4,10,19,20],entri:4,environ:[1,3],ep_data:4,ep_id:4,epoch:[0,19],epup:4,equal:4,equival:19,error:3,especi:17,establish:2,etc:[5,12],evalu:[2,12],even:[9,20],event:[0,4],event_list:4,ever:20,everi:[1,4,8],everyth:20,evil:20,exact:2,exampl:[0,1,2,4],example_app:11,exc:[4,12],exchang:[2,11,16,19],exchange_code_for_token:16,exclus:[2,19],exist:[4,20],exit:4,expand:[9,11,20],expect:0,expir:[0,4,8],expires_at:[0,20],expires_at_:20,expires_at_second:[19,20],expires_in:19,explicitli:4,expos:[3,16],exposur:17,express:[0,13,20],extens:19,extern:[2,4,19],extra:[2,4],extract:16,facil:9,fact:20,fail:[4,20],failur:[4,12],fairli:19,fals:[0,2,4,10,16,19],far:[0,20],fast:20,fault:4,featur:[5,18,20],fed:6,feel:20,fetch:[0,4,11],few:[8,20],field:[4,10,19,20],file1:4,file:[1,4,5,11,13,19,20],filter:1,filter_fulltext:[4,12],filter_scop:[4,9,11,20],firewal:12,first:[0,11,16,17,20],flag:6,flask:7,flow:[0,2,4,8],focu:20,follow:[2,4,9,10,11,20],foo:[4,15],forese:20,form:[2,3,5],form_data:2,format:[2,4],former:8,forward:20,found:[2,4],four:17,framework:11,free:20,fresh:[3,11],freshli:16,from:[0,1,2,3,4,5,8,9,11,12,15,16,19,20],from_pyfil:11,full:[0,2,4],fulltext:4,further:2,furthermor:2,futur:[16,19,20],gave:20,gener:[0,2,3,5,9,11,12,13,16,17],get:[0,1,2,3,4,5,8],get_authorize_url:16,get_bookmark:4,get_endpoint:4,get_endpoint_acl_rul:4,get_endpoint_rol:4,get_endpoint_serv:4,get_ident:2,get_input:20,get_submission_id:4,get_task:4,getattr:20,git:14,github:[13,14],give:[1,2,4,10,11,20],given:[0,2,4,19],globu:[0,1,2,3,4],globus_auth_data:[9,10,20],globus_auth_token:[9,10],globus_logout_url:11,globus_sdk:[0,1,2,3,4,8,9,10,11,12,16,19,20],globus_sdk_environ:5,globus_transfer_data:[9,10,20],globus_transfer_token:[9,10],globusapierror:[4,12],globusauthor:[0,1,3,4,8,20],globusauthorizationcodeflowmanag:[2,16],globusconnectionerror:12,globuserror:12,globushttprespons:[3,19],globusnativeappflowmanag:[2,16],globusoauthflowmanag:[2,16],globusonlinecredenti:4,globusoptionaldependencyerror:18,globusrespons:[4,19],globustimeouterror:12,goal:[9,10,15],good:[10,19,20],got:[12,20],govern:13,grant:[2,9,16,19],grant_typ:2,grasp:8,great:20,greater:4,gridftp:4,guid:14,hand:[8,20],handl:[0,2,3],handle_missing_author:0,handler:0,happen:0,hard:8,hardcod:20,have:[0,1,2,5,8,9,10,11,16,19,20],hbqvoejy4immbzlc0b8thfofuok9rshn6tv7i0uwf0hb:20,header:[0,3,19,20],header_dict:0,help:[0,2,11],helper:2,here:[4,8,9,10,19,20],hierarchi:12,high:[1,13,20],highli:19,histori:1,hit:19,hocu:20,hood:8,host_endpoint:4,host_endpoint_id:4,host_path:4,hostnam:4,hour:4,how:[4,15,17,20],howev:[8,10,16,17],http:[0,3,4,10,11,12,13,14,16,19,20],http_respons:19,http_statu:[12,19],human:9,ident:[2,4,15,20],identifi:4,identities_set:2,identity_id:4,identity_provid:2,if_expires_in:4,ignor:3,immedi:0,implement:[0,2,3,16,18],impli:[13,19],implicitli:[8,19],importantli:[0,20],imposs:17,includ:[2,13,14,16,17,18,20],incorpor:2,indefinit:10,independ:2,index:[11,19],indic:[0,6],inert:2,infinit:20,info:[2,4,20],inform:[2,4,5,12,16,17,19,20],inherit:[0,4,12,16],ini:5,initi:[0,2],input:[4,10,19,20],insid:6,inspect:[4,9,12,19],inspir:16,instal:[11,13],instanc:[4,8,12,16],instanti:[1,2,3,8],instead:[4,8,16,19],integ:19,intend:2,interact:[2,3,9,15,17],interest:20,intern:[2,3,8,16],internal_auth_cli:8,interpret:[12,19],introspect:2,invalid:[0,11],invok:11,is_authent:11,isn:4,isol:17,issu:[2,3,12,20],item:[4,19],iter:[2,4,19,20],iterabletransferrespons:[4,19],itself:[9,16,20],job:[9,20],join:2,jose:18,json:[3,12,19],json_bodi:3,just:[1,3,8,9,10,11,16],keep:[2,16],kei:[4,16,19,20],key1:5,key2:5,keyword:[2,4,16],kind:[2,13,20],know:[1,19,20],knowledg:4,known:[4,11,16,19],kwarg:[0,2,4,19],label:[4,16],languag:13,last:[1,17],law:13,lead:3,learn:12,least:[0,4,10],leav:20,left:5,leg:7,less:9,let:[8,11,16,20],level:[1,2],leverag:[10,16],librari:19,lifetim:[8,9,10,20],like:[0,2,4,8,9,10,11,20],limit:[4,8,10,13,17,20],link:[4,15,16],list:[1,2,4,11,19,20],live:[0,2,8,10,11],load:[5,9,11,12],load_app_cli:11,localhost:11,locat:[2,5,9,11,16,20],log:[4,10,11,12,20],logfil:2,login:7,logout:2,longer:[11,20],look:[0,2,4,9,10,12,16,17,20],lot:20,low:[1,2],made:0,mai:[0,2,3,4,9,10,11,12,13,16,18],maintain:18,make:[1,2,3,4,8,9,10,11,12,16,17,19,20],malform:12,manag:[0,4,14],mani:[4,9],manual:[4,14],map:[0,17],margin:19,matter:[8,11],maximum:4,mean:[17,19,20],meaning:16,mechan:16,member:19,menu:20,messag:[4,11,12],method:[0,2,4,8,10,12,13,16,19,20],might:[4,11],minimum:4,minut:4,mkdir:4,model:16,modul:6,monitored_endpoint:4,month:20,more:[4,8,12,15,16,19,20],most:[0,2,4,12,14,16,19,20],motiv:17,move:20,mtime:4,much:[0,20],multipl:[2,4],must:[1,2,4,6,9,10,11,16,18,19,20],my_effective_pause_rule_list:4,my_shared_endpoint_list:4,myendpointsearch:12,myproxi:4,name:[2,3,4,11,16,17,19,20],nativ:[2,7,9],nativeappauthcli:[2,10,16,20],natur:2,navig:[16,20],necessari:[2,10,15],need:[0,1,2,4,9,10,11,19,20],network:12,networkerror:12,never:[3,19],newdir:4,newpath:4,next:[0,20],nice:3,non:[19,20],none:[0,2,3,4,12,16,19,20],normal:[2,4,15,19],notabl:2,note:[6,8,9,19,20],notic:17,notthreadsaf:2,now:[5,8,20],nullauthor:0,num_result:[1,4],num_secs_allow:19,number:[4,19],oauth2:[2,8,9,10,11,13],oauth2_:16,oauth2_client_credentials_token:[2,9],oauth2_exchange_code_for_token:[2,10,11,20],oauth2_get_authorize_url:[2,10,11,20],oauth2_get_dependent_token:[2,19],oauth2_refresh_token:2,oauth2_revoke_token:[2,11],oauth2_start_flow:[2,10,11],oauth2_start_flow_:2,oauth2_start_flow_authorization_cod:2,oauth2_start_flow_native_app:[2,10,20],oauth2_token:2,oauth2_token_introspect:2,oauth2_userinfo:2,oauth2client:16,oauth:[2,4,7],oauth_flow_manag:16,oauthdependenttokenrespons:19,oauthtokenrespons:[2,16,17,18,19],object:[0,1,3],obtain:[2,13],occur:12,oct18_2016:19,octob:19,off:[8,10],offer:[9,15],offici:4,often:20,oidc:[2,13],old:20,older:4,oldpath:4,omit:2,on_refresh:0,onc:[0,1,9],onli:[0,2,4,8,9,10,11,13,16,17,20],onto:17,open:[4,18],openid:[2,9,11,16,17,20],oper:[0,4,8,9,10,13],operation_l:4,operation_mkdir:4,operation_renam:4,oppos:[4,17],option:[3,4,10,13,16,17],order:[2,6,9,10,11,16,17,18,20],ordinari:19,org:[2,4,9,10,11,13,14,16,17,19,20],organ:[2,17],orient:19,origin:[2,19],other:[0,2,3,9,11,19,20],other_token:19,otherwis:[0,4,19],our:[15,16,17,20],out:[2,4,9,10,11,12,14,15,20],outsid:9,over:[4,16,19],overrid:3,overwrit:0,own:[2,4,9,15,16,20],owner_str:4,packag:[14,18],page:[7,9,11,16,19,20],painless:20,param:[2,3,4,11],paramet:[0,1,2,3,4,5,11,12,16,19],parameter:16,pars:19,part:[2,3,8,11],particular:[0,20],pass:[0,2,3,4,6,9,16],passthrough:2,password:[0,20],past:[10,16],path:[3,4,11,19],paus:4,pause_info:4,peek:20,pendingdeprecationwarn:6,per:[0,17],perform:[2,4,15],perhap:[4,8,20],period:[0,8],permiss:[4,13,15,20],persist:10,person:[5,19],piec:[7,11,20],pip:[11,14],place:11,plai:[2,20],plan:5,pleas:[4,10,19,20],plu:2,pocu:20,point:5,polici:20,polling_interv:4,portabl:[11,18],portal:2,portal_client_id:11,posix:[0,19,20],possess:2,possibl:[12,19],post:[2,3,4,13],potenti:[3,4],power:20,preced:[5,6],prefer:8,prefil:16,prefill_named_gr:[2,16],present:[0,5],preserve_timestamp:4,press:4,pretti:20,preview:5,primarili:[2,16],princip:4,principal_typ:4,print:[1,2,4,9,10,11,12,19,20],print_funct:19,privaci:20,probabl:20,problem:[0,20],proce:20,proceed:19,process:[0,2,11,16],procur:[10,20],produc:[9,15,16],product:20,profil:[9,11,16,17,20],programmat:1,progress:16,project1:4,project1data:4,project:[9,11,20],prompt:20,protect:[11,16,20],prove:[16,20],provid:[0,1,2,3,4,8,13,15,16,19,20],pull:[4,11],purpos:2,put:[2,3,4,11,13,20],py2:19,py3:19,pypi:14,python2:20,python3:[10,20],python:[4,5,6,12],queri:[2,3,4,11,16,19],race:8,rais:[12,19],rand2002:2,random:16,rang:[15,19],rather:[15,16],raw:[2,3,19],raw_input:[4,10,19,20],raw_json:12,raw_text:12,read:[16,20],readabl:2,readi:20,realli:16,reason:17,receiv:12,recev:12,recommend:4,record:4,recurs:4,redirect:[10,11,16,20],redirect_nam:11,redirect_uri:[2,11,16],refer:[8,9,19],refresh:[0,2],refresh_token:[0,2,10,16,19,20],refreshtokenauthor:[0,2,8,20],regist:[9,10],registr:[9,10,11],rel:[11,19],relat:2,relationship:2,relative_tim:19,relev:[9,10,11,17,18,20],reli:[16,18],remedi:0,rememb:20,remov:0,renam:4,render:[2,11],renew:0,replac:20,repositori:14,repres:[2,8,11,15,16],represent:[4,19],reqs_doc:19,request:[0,2,3,4,8,9,10,11,12,16,17,20],request_id:4,requested_scop:[2,16],requir:[2,4,8,13,14,16,18,19,20],requirements_data:4,rescu:20,resolut:3,resouc:[13,15],resourc:[2,4,10,13,17,19,20],resource_serv:19,respond:0,respons:[0,2,3,4,12,13,16,17],response_class:[2,3],response_typ:2,rest:[3,4,12,13,20],result:[0,4],retri:[3,4,20],retriev:19,retry_401:3,revoc:2,revok:[2,11,20],right:15,robust:18,role:4,role_data:4,role_id:4,role_list:4,root:12,rout:11,rt_author:0,rtype:4,rule:[4,5],rule_data:4,rule_id:4,run:[2,4,6,8,9,11,16,20],safe:19,safeti:19,sai:20,same:4,sampl:[2,20],save:[9,11,13],scenario:[2,11,20],scope:[2,4,9,11,13,15,16],screen:20,script:[11,20],sdk:[0,1,2,4],search:[4,5,9,12],second:[0,4,9,16,19,20],secret:[2,8,9,11,16],secret_kei:11,section:[0,5,15],sectionnam:5,secur:[9,20],see:[0,2,4,6,8,9,13,14,17,19,20],seemless:19,select:20,self:[2,3],semant:3,send:[2,3,11,16,19],sens:17,sent:[0,2,16,20],separ:[2,16,17,20],serv:[3,17],server:[2,4,5,11,12,13,15,16],server_data:4,server_id:4,server_list:4,server_nam:11,servic:0,session:[3,11],set:[0,2,3,4,5,10,11,16,17,18],set_app_nam:3,set_authorization_head:0,setup:14,sever:2,share:[4,5],shared_endpoint:4,shared_ep_data:4,shell:5,shortest:[9,10],should:[0,2,3,4,5,8,9,10,11,12,16,17,19,20],shouldn:[4,17],side:[2,11,16],sign:4,significantli:15,simpl:[0,3,4,8,9,10,11,16,20],simplest:14,simpli:[1,5,10],simplifi:3,sinc:[0,19],singl:[0,4,17,19],site:20,size:4,slash:3,small:16,softwar:13,sole:16,solv:0,some:[0,2,4,11,13,15,16,19],someth:[0,20],soon:[6,20],sophist:[0,16],sourc:[0,2,3,4,11,12,13,16,19],source_endpoint:4,source_endpoint_id:4,source_path:4,space:[2,16],special:2,specif:[5,9,10,12,13,16,18,19,20],specifi:[0,2,3,4,8,16,20],speed:[2,3],standard:[2,5,12,19],start:[0,2,11,16,20],state:[0,2,4,11,16],statu:[1,2,4,12,19],stderr:19,step:[13,16],still:19,store:[2,5,9,11,16,20],str:[12,19,20],stress:20,string:[0,2,3,4,11,12,16,19,20],strip:[10,20],structur:[9,19,20],stub:12,stuff:20,sub:[2,19],subclass:[8,12,19],submiss:4,submission_id:4,submit:4,submit_delet:4,submit_transf:4,succeed:4,success:4,successful_transf:4,successfulli:[4,11],suffici:[10,16],suitabl:[9,12,16],support:[2,3,4,13,14,15,18,19],supports_auto_activ:19,supports_web_activ:19,sure:[9,10,11],surfac:16,sync_level:4,system:[5,14,15,16],take:[0,1,2,5,11,16,19,20],talk:[8,13],task:[1,4,19],task_event_list:4,task_id:[1,4],task_list:[1,4],task_pause_info:4,task_successful_transf:4,task_wait:4,tdata:4,team:3,temporari:16,term:[0,20],termin:[4,10],test:4,text:[4,19],text_bodi:3,than:[4,9,12,17,19],thei:[0,2,4,5,8,16,17,19,20],them:[2,11,15,20],therebi:16,therefor:[2,12,15],thi:[0,1,2,4,5,8,9,10,11,12,13,14,15,16,17,18,19,20],thick:4,thing:20,think:[0,20],those:[2,4,8,16,17,19,20],though:20,three:[5,7],through:[2,4,15,16,19,20],thrown:12,thu:11,time:[0,4,8,9,12,19,20],time_second:19,timeout:4,timestamp:[0,19,20],togeth:15,token:[0,2],token_info:11,token_respons:[2,9,10,17,19,20],token_str:2,token_typ:20,tokenrespons:0,tool:11,top:[4,19],total:[4,8,12],track:[9,16],transfer:[1,2],transfer_access_token:8,transfer_at:20,transfer_author:8,transfer_cli:[0,4,8,11],transfer_item:4,transfer_refresh_token:8,transfer_result:4,transfer_rt:20,transfer_token:[1,2,20],transfer_token_info:2,transferapierror:4,transfercli:[0,1,4],transferdata:4,transferrespons:[4,19],treat:[19,20],turn:20,tutori:[13,16],tweak:20,two:[2,4,5,11,13,17,20],txt:4,typeerror:19,typic:[2,9,10,16,19],u9uulmytklw4_15reo_f2e056wlqjawelp51pgaklxymyudfgtd4snycirjfq3mnj:20,ultim:20,unabl:2,unadorn:0,unauthor:0,uncertain:16,uncheck:[9,11,20],unclassifi:12,under:[8,13,17],underli:19,understand:20,unexpect:12,uniqu:4,univers:13,unless:[0,2,13,19,20],unlik:9,unsaf:2,unset:5,until:[4,19],unus:2,unusu:19,upcom:5,updat:[0,4,11],update_bookmark:4,update_endpoint:4,update_endpoint_acl_rul:4,update_endpoint_serv:4,update_result:4,update_task:4,upon:[2,16,18],uri:[10,11,16],url:[2,4,10,16,20],url_for:11,urn:[9,11,16,17,20],usabl:2,usag:[0,4,8,12,20],user:[2,3,4,5,8,9,10,11,12,15,16,19,20],userinfo:2,usernam:[0,2,20],usual:[16,19],valid:[0,19,20],valu:[2,4,9,10,11,16,19],value1:5,value2:5,valueerror:12,variabl:[1,4],variou:[1,2,10,15,20],venv:11,verbatim:[2,12],veri:[0,1,2,5,8,11,15],verif:18,verifi:[2,16],verify_checksum:4,version:[9,10,13,14],via:[1,4,11,15,18,19],virtualenv:11,visibl:4,wai:[0,8,14,16,17,19,20],wait:4,want:[0,2,4,8,9,10,11,12,16,19,20],warn:[4,6],warranti:13,web:[4,10,11,16,19,20],webactiv:19,webserv:16,websit:4,well:15,went:4,were:[2,19],what:[17,19,20],when:[0,3,4,9,10,16,17,19,20],whenc:19,whenev:[0,8,20],where:12,wherev:9,which:[0,2,3,4,5,8,9,10,11,12,14,15,16,17,18,20],why:4,wide:[15,19],wish:[2,16,18,20],within:[0,4],without:[1,3,4,8,13,16,18],won:[19,20],wonc:6,work:[1,11,20],world:2,worri:20,worth:20,would:[8,16,17],wrap:[8,12,16,19,20],wrapper:3,write:[12,13,15,20],www:[4,13,19],year:20,yet:[5,11],you:[0,1,2,3,4,5,6,8,9,10,11,12,13,15,16,17,18,19,20],your:[0,1,2,4,5,8,9,10,11,13,14,16,17],your_id_her:20,yourself:[8,20]},titles:["API Authorization","Service Clients","Auth Client","Low Level API","Transfer Client","Globus SDK Configuration","Deprecations","Globus SDK Examples","API Authorization","Client Credentials Authentication","Native App Login","Three Legged OAuth with Flask","Exceptions","Globus SDK for Python (Beta)","Installation","Globus Auth / OAuth2","OAuth Flows","Resouce Servers and Scopes","Optional Dependencies","Responses","SDK Tutorial"],titleterms:{"class":[12,19],"short":17,access:[8,20],advanc:20,again:20,api:[0,3,8],app:[10,11],auth:[2,8,15,19],authclient:8,authent:9,author:[0,8],basic:8,beta:13,client:[1,2,4,9,10,20],compon:11,config:5,configur:5,content:13,credenti:9,depend:18,deprec:6,environ:5,error:[4,12],exampl:7,except:12,expir:9,explor:20,flask:11,flow:[9,10,16],format:5,gener:19,get:[9,10,20],globu:[5,7,13,15],handl:9,helper:4,instal:14,interfac:0,just:17,leg:11,less:17,level:3,licens:13,login:[10,11,20],logout:11,low:3,manag:16,nativ:10,never:20,oauth2:15,oauth:[11,16],oauthtokenrespons:20,object:4,oidc:18,option:18,python:13,refresh:[8,10,20],regist:11,resouc:17,respons:19,result:9,save:20,scope:17,sdk:[5,7,13,20],server:17,servic:[1,20],share:11,some:20,special:4,step:20,tabl:13,talk:20,three:11,token:[8,9,10,11,17,18,20],transfer:[4,19],transfercli:8,tutori:20,type:0,util:11,variabl:5,version:17,why:17,your:20}})